import logging
from django.forms import ValidationError
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from config.utils import create_decrypted_data
from users_app.services.auth_service import authenticate_user, logout_user, register_user, complete_2fa_login
from inertia import InertiaResponse

logger = logging.getLogger(__name__)

def index(request):
    if request.user.is_authenticated:
        return redirect("dashboard")
    return InertiaResponse(
        request,
        "Auth/LoginPage",
        props={
            "errors": request.session.pop("errors", None),
            "success": request.session.pop("success", None),
        },
    )


def login_view(request):
    if request.method == "POST":
        result = authenticate_user(request)
        if result == "2fa_required":
            # Redirigir a la página de verificación 2FA
            return redirect("login_2fa")
        elif result == True:
            # Login directo (en caso de que se deshabilite 2FA para algunos usuarios)
            return redirect("dashboard")
    return redirect("index")


def login_2fa_view(request):
    """Vista para mostrar la página de verificación 2FA"""
    if request.method == "GET":
        # Verificar que hay un email pendiente de 2FA
        pending_email = request.session.get('pending_2fa_user_email')
        if not pending_email:
            return redirect('index')
        
        return InertiaResponse(
            request,
            "Auth/Login2FAPage",
            props={
                "email": pending_email,
                "errors": request.session.pop("errors", None),
                "success": request.session.pop("success", None),
            },
        )


def verify_2fa_view(request):
    """Vista para verificar el código 2FA"""
    if request.method == "POST":
        data = create_decrypted_data(request)
        
        # Obtener email de la sesión
        pending_email = request.session.get('pending_2fa_user_email')
        if not pending_email:
            request.session["errors"] = {"__all__": "Sesión expirada. Vuelve a iniciar sesión."}
            return redirect('index')
        
        # Obtener código del formulario
        code = data.get('code', '').strip().upper()
        if not code:
            request.session["errors"] = {"code": ["El código es requerido"]}
            return redirect('login_2fa')
        
        try:
            # Verificar código usando el servicio
            success, error_message = complete_2fa_login(request, code)
            if success:
                request.session["success"] = "¡Acceso verificado exitosamente! Bienvenido."
                return redirect('dashboard')
            else:
                request.session["errors"] = {"code": [error_message]}
                return redirect('login_2fa')
                
        except Exception as e:
            logger.error(f"Error verificando código 2FA: {e}")
            request.session["errors"] = {"__all__": "Error interno. Intente más tarde."}
            return redirect('login_2fa')
    
    return redirect('login_2fa')


def resend_2fa_view(request):
    """Vista para reenviar código 2FA"""
    if request.method == "POST":
        # Obtener datos de la sesión
        pending_email = request.session.get('pending_2fa_user_email')
        ip_address = request.session.get('pending_2fa_ip')
        
        if not pending_email or not ip_address:
            request.session["errors"] = {"__all__": "Sesión expirada. Vuelve a iniciar sesión."}
            return redirect('index')
        
        try:
            # Buscar usuario
            from users_app.models import User
            user = User.objects.get(email=pending_email)
            
            # Reenviar código 2FA
            from users_app.services.email_service import resend_2fa_code
            if resend_2fa_code(request, user, ip_address):
                request.session["success"] = "Código de seguridad reenviado exitosamente"
            else:
                request.session["errors"] = {"__all__": "Error reenviando código. Intente más tarde."}
                
        except User.DoesNotExist:
            request.session["errors"] = {"__all__": "Usuario no encontrado"}
            return redirect('index')
        except Exception as e:
            logger.error(f"Error reenviando código 2FA: {e}")
            request.session["errors"] = {"__all__": "Error interno. Intente más tarde."}
    
    return redirect('login_2fa')


def register_view(request):
    """Vista para registro de usuarios normales (sin privilegios administrativos)"""
    if request.method == "GET":
        if request.user.is_authenticated:
            return redirect("dashboard")
        return InertiaResponse(
            request,
            "Auth/RegisterPage",
            props={
                "errors": request.session.pop("errors", None),
                "success": request.session.pop("success", None),
            },
        )
    if request.method == "POST":
        data = create_decrypted_data(request)
        try:
            register_user(data, request)
            request.session["success"] = "Usuario registrado exitosamente"
        except ValidationError as e:
            request.session["errors"] = {"__all__": e.messages}
        return redirect('check_email')


def check_email_view(request):
    """Vista para mostrar la página de verificación de email"""
    if request.method == "GET":
        # Verificar que hay un email pendiente de verificación
        pending_email = request.session.get('pending_user_email')
        if not pending_email:
            return redirect('register')
        
        return InertiaResponse(
            request,
            "Auth/CheckEmailPage",
            props={
                "email": pending_email,
                "errors": request.session.pop("errors", None),
                "success": request.session.pop("success", None),
            },
        )


def verify_code_view(request):
    """Vista para verificar el código de verificación de registro"""
    if request.method == "POST":
        data = create_decrypted_data(request)
        
        # Obtener email de la sesión
        pending_email = request.session.get('pending_user_email')
        if not pending_email:
            request.session["errors"] = {"__all__": "Sesión expirada. Vuelve a registrarte."}
            return redirect('register')
        
        # Obtener código del formulario
        code = data.get('code', '').strip().upper()
        if not code:
            request.session["errors"] = {"code": ["El código es requerido"]}
            return redirect('check_email')
        
        try:
            # Buscar usuario
            from users_app.models import User
            user = User.objects.get(email=pending_email)
            
            # Verificar código usando el servicio
            from users_app.services.email_service import verify_code
            if verify_code(user, code):
                # Código correcto - activar usuario y hacer login
                user.is_active = True
                user.save()
                
                # Limpiar sesión
                if 'pending_user_email' in request.session:
                    del request.session['pending_user_email']
                
                # Login automático
                from django.contrib.auth import login as auth_login
                auth_login(request, user)
                
                request.session["success"] = "¡Cuenta verificada exitosamente! Bienvenido."
                return redirect('dashboard')
            else:
                request.session["errors"] = {"code": ["Código incorrecto o expirado"]}
                return redirect('check_email')
                
        except User.DoesNotExist:
            request.session["errors"] = {"__all__": "Usuario no encontrado"}
            return redirect('register')
        except Exception as e:
            logger.error(f"Error verificando código: {e}")
            request.session["errors"] = {"__all__": "Error interno. Intente más tarde."}
            return redirect('check_email')
    
    return redirect('check_email')


def resend_code_view(request):
    """Vista para reenviar código de verificación de registro"""
    if request.method == "POST":
        # Obtener email de la sesión
        pending_email = request.session.get('pending_user_email')
        if not pending_email:
            request.session["errors"] = {"__all__": "Sesión expirada. Vuelve a registrarte."}
            return redirect('register')
        
        try:
            # Buscar usuario
            from users_app.models import User
            user = User.objects.get(email=pending_email)
            
            # Reenviar código (ahora con el parámetro request)
            from users_app.services.email_service import resend_verification_code
            if resend_verification_code(request, user):
                request.session["success"] = "Código reenviado exitosamente"
            else:
                request.session["errors"] = {"__all__": "Error reenviando código. Intente más tarde."}
                
        except User.DoesNotExist:
            request.session["errors"] = {"__all__": "Usuario no encontrado"}
            return redirect('register')
        except Exception as e:
            logger.error(f"Error reenviando código: {e}")
            request.session["errors"] = {"__all__": "Error interno. Intente más tarde."}
    
    return redirect('check_email')


@login_required(login_url="/")
def logout_view(request):
    return logout_user(request)


@login_required(login_url="/")
def dashboard_view(request):
    return InertiaResponse(
        request,
        "DashBoard/Index"
    )