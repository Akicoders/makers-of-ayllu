import logging
from django.forms import ValidationError
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from config.utils import create_decrypted_data
from users_app.services.auth_service import (
    authenticate_user, 
    logout_user, 
    register_user, 
    complete_2fa_login,
    complete_registration_verification,
    resend_registration_code_service,
    resend_2fa_code_service
)
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
            "hcaptchaSitekey": settings.HCAPTCHA_SITEKEY,
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
        
        # Obtener código del formulario
        code = data.get('code', '').strip().upper()
        if not code:
            request.session["errors"] = {"code": ["El código es requerido"]}
            return redirect('login_2fa')
        
        # Verificar código usando el servicio
        success, message = complete_2fa_login(request, code)
        if success:
            request.session["success"] = "¡Acceso verificado exitosamente! Bienvenido."
            return redirect('dashboard')
        else:
            request.session["errors"] = {"code": [message]} if "Incorrecto" in message or "Código" in message else {"__all__": message}
            return redirect('login_2fa')
    
    return redirect('login_2fa')


def resend_2fa_view(request):
    """Vista para reenviar código 2FA"""
    if request.method == "POST":
        success, message = resend_2fa_code_service(request)
        if success:
            request.session["success"] = message
        else:
            request.session["errors"] = {"__all__": message}
    
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
                "hcaptchaSitekey": settings.HCAPTCHA_SITEKEY,
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
        
        # Obtener código del formulario
        code = data.get('code', '').strip().upper()
        if not code:
            request.session["errors"] = {"code": ["El código es requerido"]}
            return redirect('check_email')
        
        # Usar el servicio para verificar y activar
        success, message = complete_registration_verification(request, code)
        
        if success:
            request.session["success"] = message
            return redirect('dashboard')
        else:
            request.session["errors"] = {"code": [message]} if "incorrecto" in message.lower() or "código" in message.lower() else {"__all__": message}
            return redirect('check_email')
    
    return redirect('check_email')


def resend_code_view(request):
    """Vista para reenviar código de verificación de registro"""
    if request.method == "POST":
        success, message = resend_registration_code_service(request)
        
        if success:
            request.session["success"] = message
        else:
            request.session["errors"] = {"__all__": message}
    
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