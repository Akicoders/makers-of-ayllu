import logging
from django.forms import ValidationError
import requests
from django.conf import settings
from django.utils import timezone
from django.shortcuts import redirect
from django.contrib.auth import login as auth_login, logout

from users_app.services.email_service import send_verification_code, send_2fa_code
from users_app.forms.users_form import UserRegistrationForm
from users_app.models import User, SessionUser, LogBlockedUser, LoginIncorrect
from users_app.forms.login_form import LoginForm
from config.utils import create_decrypted_data

# helpers
from users_app.services.helpers import (
    has_logged_incorrect_too_many_times,
    get_remaining_block_time,
    has_logged_in_multiple_ips,
    exists_login_block_record,
)

logger = logging.getLogger(__name__)


def authenticate_user(request):
    """
    Autentica usuario y redirige a 2FA en lugar de hacer login directo
    """
    if request.user.is_authenticated:
        return True

    data = create_decrypted_data(request)
    form = LoginForm(data)

    if not form.is_valid():
        request.session["errors"] = form.errors
        return False

    token = form.cleaned_data["hcaptcha"]
    success, error_message = verify_hcaptcha(token)
    if not success:
        request.session["errors"] = {"__all__": error_message}
        return False

    email = form.cleaned_data["email"]
    password = form.cleaned_data["password"]
    ip_address = form.cleaned_data["ip_address"]

    try:
        user = User.objects.get(email=email)

        # --- Validaciones de estado ---
        if not user.is_active:
            request.session["errors"] = {"__all__": "Tu cuenta está inactiva."}
            return False

        if getattr(user, "estado", None) == "BANEADO":
            request.session["errors"] = {"__all__": "Tu cuenta ha sido baneada."}
            return False

        if getattr(user, "is_enable_bloked", False):
            if has_logged_incorrect_too_many_times(user.id):
                remaining = get_remaining_block_time(user.id)
                hours = remaining.total_seconds() // 3600
                minutes = (remaining.total_seconds() % 3600) // 60

                if not exists_login_block_record(user.id, is_login_attempt=True):
                    LogBlockedUser.objects.create(
                        user=user,
                        ip_address=ip_address,
                        is_login_attempt=True,
                        is_active=True,
                    )

                request.session["errors"] = {
                    "__all__": f"Has excedido los intentos. Intenta nuevamente en {int(hours)}h {int(minutes)}m."
                }
                return False

            if has_logged_in_multiple_ips(user.id):
                user.estado = "BANEADO"
                user.save()

                LogBlockedUser.objects.create(
                    user=user,
                    ip_address=ip_address,
                    is_login_attempt=False,
                    is_active=True,
                )
                logger.warning(f"Usuario {user.email} baneado por múltiples IPs.")
                request.session["errors"] = {
                    "__all__": "Tu cuenta ha sido baneada por actividad sospechosa."
                }
                return False
        # --- Validación de contraseña ---
        if user.check_password(password):
            # En lugar de hacer login directo, guardamos info en sesión y enviamos código 2FA
            request.session['pending_2fa_user_email'] = user.email
            request.session['pending_2fa_ip'] = ip_address
            request.session['pending_2fa_user_agent'] = request.META.get("HTTP_USER_AGENT", "")[:255]
            
            try:
                # Enviar código 2FA
                send_2fa_code(request, user, ip_address)
                logger.info(f"Código 2FA enviado a {user.email} desde {ip_address}")
                return "2fa_required"  # Indicar que se necesita 2FA
            except Exception as e:
                logger.error(f"Error enviando código 2FA a {user.email}: {e}")
                request.session["errors"] = {"__all__": "Error enviando código de seguridad. Intente más tarde."}
                return False
        else:
            LoginIncorrect.objects.create(user=user, ip_address=ip_address)
            logger.info(f"Login Incorrecto: {user.email} desde {ip_address}")
            request.session["errors"] = {"__all__": "Correo o contraseña inválidos"}
            return False

    except User.DoesNotExist as e:
        logger.info(f"Login Incorrecto: {email} desde {ip_address} - Usuario no existe")
        request.session["errors"] = {"__all__": "Correo o contraseña inválidos"}
        return False
    except Exception as e:
        logger.error(f"Error en authenticate_user: {e}")
        request.session["errors"] = {"__all__": "Error interno. Intente más tarde."}
        return False


def complete_2fa_login(request, code):
    """
    Completa el login después de verificar el código 2FA
    """
    # Obtener datos de la sesión
    email = request.session.get('pending_2fa_user_email')
    ip_address = request.session.get('pending_2fa_ip')
    user_agent = request.session.get('pending_2fa_user_agent', '')
    
    if not email or not ip_address:
        logger.error("Datos de sesión 2FA faltantes")
        return False, "Sesión expirada. Vuelve a iniciar sesión."
    
    try:
        user = User.objects.get(email=email)
        
        # Verificar código 2FA
        from users_app.services.email_service import verify_2fa_code
        if verify_2fa_code(user, code):
            # Crear sesión de usuario
            session_user = SessionUser.objects.create(
                user=user,
                login_time=timezone.now(),
                ip_address=ip_address,
                user_agent=user_agent,
            )
            request.session["session_user_id"] = str(session_user.id)
            
            # Hacer login
            auth_login(request, user)
            
            # Limpiar datos de 2FA de la sesión
            if 'pending_2fa_user_email' in request.session:
                del request.session['pending_2fa_user_email']
            if 'pending_2fa_ip' in request.session:
                del request.session['pending_2fa_ip']
            if 'pending_2fa_user_agent' in request.session:
                del request.session['pending_2fa_user_agent']
            
            logger.info(f"Login 2FA completado exitosamente: {user.email} desde {ip_address}")
            return True, None
        else:
            logger.warning(f"Código 2FA incorrecto para {user.email}")
            return False, "Código incorrecto o expirado"
            
    except User.DoesNotExist:
        logger.error(f"Usuario no encontrado para 2FA: {email}")
        return False, "Usuario no encontrado"
    except Exception as e:
        logger.error(f"Error completando 2FA para {email}: {e}")
        return False, "Error interno. Intente más tarde."


def register_user(data, request):
    """
    Registra un nuevo usuario y envía código de verificación por email
    """
    form = UserRegistrationForm(data)
    if not form.is_valid():
        raise ValidationError(form.errors)
    
    hcaptcha_token = form.cleaned_data.get('hcaptcha')
    success, error_message = verify_hcaptcha(hcaptcha_token)
    if not success:
        raise ValidationError({'__all__': [error_message]})
    
    # Crear usuario pero sin activar
    user = form.save(commit=False)
    user.is_active = False  # Usuario inactivo hasta verificar email
    user.save()
    
    # Guardar email en la sesión para el proceso de verificación
    request.session['pending_user_email'] = user.email
    
    # Enviar código de verificación
    try:
        send_verification_code(request, user)
        logger.info(f"Usuario registrado y código enviado a {user.email}")
    except Exception as e:
        logger.error(f"Error enviando código a {user.email}: {e}")
        # En caso de error, eliminar el usuario creado
        user.delete()
        if 'pending_user_email' in request.session:
            del request.session['pending_user_email']
        raise ValidationError({"__all__": ["Error enviando código de verificación. Intente más tarde."]})
    
    return user


def logout_user(request):
    request.session.flush()
    response = redirect("index")
    response.delete_cookie("session_wt")
    response.delete_cookie("window_id")
    logout(request)
    return response


def verify_hcaptcha(token: str):
    try:
        response = requests.post(
            "https://hcaptcha.com/siteverify",
            data={"secret": settings.HCAPTCHA_SECRET, "response": token},
            timeout=5,
        ).json()
        if response.get("success"):
            return True, None
        return False, "Verificación Captcha fallida"
    except requests.RequestException as e:
        logger.error(f"Error verificando hCaptcha: {e}")
        return False, "Error al verificar Captcha"