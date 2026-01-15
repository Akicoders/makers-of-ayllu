import string
import random
import logging
from django.core.mail import EmailMultiAlternatives
from django.core.cache import cache
from django.template.loader import render_to_string
from django.conf import settings
from threading import Thread
from django.utils import timezone

def generate_verification_code(longitud=6):
    """Genera un código de verificación alfanumérico"""
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=longitud))

def get_location_from_ip(ip_address):
    """Obtiene ubicación estimada desde IP (implementar con servicio real si es necesario)"""
    # Por ahora retorna un placeholder, se puede integrar con servicios como ipinfo.io
    return "Lima, Perú"

def send_verification_code(request, user):
    """Envía código de verificación con plantilla HTML para registro"""
    logging.info(f"Enviando código de verificación a {user.email}")
    
    try:
        # Generar código
        codigo = generate_verification_code()
        logging.info(f"Código generado: {codigo} para {user.email}")
        
        # Guardar en caché
        cache.set(f'verify:{user.email}', codigo, timeout=20*60)  # 20 minutos
        logging.debug(f"Código guardado en caché para {user.email}: {codigo}")
        
        from django.templatetags.static import static
        logo_url = request.build_absolute_uri(static('logo.png'))
        # Preparar contexto para la plantilla
        context = {
            'user_name': user.first_name or user.username,
            'verification_code': codigo,
            'user_email': user.email,
            'logo_url': logo_url,
        }
        
        # Renderizar plantilla HTML
        html_content = render_to_string('emails/verification_code.html', context)
        
        # Contenido de texto plano como respaldo
        text_content = f"""
        Hola {user.first_name or user.username},

        Tu código de verificación para AciertaPeru es: {codigo}

        Este código expirará en 20 minutos.

        Si no solicitaste este código, puedes ignorar este mensaje.

        Saludos,
        Equipo AciertaPeru
        """
        
        # Crear email con contenido HTML y texto
        email = EmailMultiAlternatives(
            subject='Código de Verificación - AciertaPeru',
            body=text_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[user.email]
        )
        
        # Adjuntar contenido HTML
        email.attach_alternative(html_content, "text/html")
        
        # Enviar email
        email.send()
        
        logging.info(f"Código de verificación enviado exitosamente a {user.email}")
        
    except Exception as e:
        logging.error(f"Error enviando código de verificación a {user.email}: {e}")
        raise

def send_2fa_code(request, user, ip_address):
    """Envía código 2FA para login con información de seguridad"""
    logging.info(f"Enviando código 2FA a {user.email}")
    
    try:
        # Generar código
        codigo = generate_verification_code()
        logging.info(f"Código 2FA generado: {codigo} para {user.email}")
        
        # Guardar en caché con tiempo menor (5 minutos)
        cache.set(f'2fa:{user.email}', codigo, timeout=5*60)  # 5 minutos
        logging.debug(f"Código 2FA guardado en caché para {user.email}: {codigo}")
        
        from django.templatetags.static import static
        logo_url = request.build_absolute_uri(static('logo.png'))
        
        # Preparar contexto para la plantilla
        context = {
            'user_name': user.first_name or user.username,
            'verification_code': codigo,
            'user_email': user.email,
            'logo_url': logo_url,
            'ip_address': ip_address,
            'login_time': timezone.now().strftime('%d/%m/%Y %H:%M:%S'),
            'location': get_location_from_ip(ip_address),
        }
        
        # Renderizar plantilla HTML específica para 2FA
        html_content = render_to_string('emails/login_2fa_code.html', context)
        
        # Contenido de texto plano como respaldo
        text_content = f"""
        Hola {user.first_name or user.username},

        Se ha detectado un intento de acceso a tu cuenta desde la IP: {ip_address}

        Tu código de verificación 2FA para AciertaPeru es: {codigo}

        Este código expirará en 5 minutos.

        Si no fuiste tú quien intentó acceder, cambia tu contraseña inmediatamente.

        Saludos,
        Equipo AciertaPeru
        """
        
        # Crear email con contenido HTML y texto
        email = EmailMultiAlternatives(
            subject='Código de Acceso - Verificación de Seguridad - AciertaPeru',
            body=text_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[user.email]
        )
        
        # Adjuntar contenido HTML
        email.attach_alternative(html_content, "text/html")
        
        # Enviar email
        email.send()
        
        logging.info(f"Código 2FA enviado exitosamente a {user.email}")
        
    except Exception as e:
        logging.error(f"Error enviando código 2FA a {user.email}: {e}")
        raise

def send_verification_code_async(request, user):
    """Versión asíncrona del envío de código"""
    def send_email():
        try:
            send_verification_code(request, user)
        except Exception as e:
            logging.error(f"Error en envío asíncrono para {user.email}: {e}")
    
    # Ejecutar en hilo separado
    thread = Thread(target=send_email)
    thread.daemon = True
    thread.start()
    logging.info(f"Envío asíncrono iniciado para {user.email}")

def send_2fa_code_async(request, user, ip_address):
    """Versión asíncrona del envío de código 2FA"""
    def send_email():
        try:
            send_2fa_code(request, user, ip_address)
        except Exception as e:
            logging.error(f"Error en envío asíncrono 2FA para {user.email}: {e}")
    
    # Ejecutar en hilo separado
    thread = Thread(target=send_email)
    thread.daemon = True
    thread.start()
    logging.info(f"Envío asíncrono 2FA iniciado para {user.email}")

def verify_code(user, codigo_enviado):
    """Verifica el código ingresado por el usuario para registro"""
    try:
        codigo_guardado = cache.get(f'verify:{user.email}')
        logging.debug(f"Verificando código para {user.email}. Código guardado: {codigo_guardado}, Código enviado: {codigo_enviado}")
        
        if codigo_guardado and codigo_enviado.upper() == codigo_guardado.upper():
            # No activar aquí - se hace en la vista
            cache.delete(f'verify:{user.email}')
            logging.info(f"Código verificado exitosamente para {user.email}")
            return True
        
        logging.warning(f"Código incorrecto para {user.email}")
        return False
        
    except Exception as e:
        logging.error(f"Error verificando código para {user.email}: {e}")
        return False

def verify_2fa_code(user, codigo_enviado):
    """Verifica el código 2FA ingresado por el usuario para login"""
    try:
        codigo_guardado = cache.get(f'2fa:{user.email}')
        logging.debug(f"Verificando código 2FA para {user.email}. Código guardado: {codigo_guardado}, Código enviado: {codigo_enviado}")
        
        if codigo_guardado and codigo_enviado.upper() == codigo_guardado.upper():
            cache.delete(f'2fa:{user.email}')
            logging.info(f"Código 2FA verificado exitosamente para {user.email}")
            return True
        
        logging.warning(f"Código 2FA incorrecto para {user.email}")
        return False
        
    except Exception as e:
        logging.error(f"Error verificando código 2FA para {user.email}: {e}")
        return False

def resend_verification_code(request, user):
    """Reenvía código de verificación para registro"""
    try:
        # Verificar si hay un código activo
        existing_code = cache.get(f'verify:{user.email}')
        if existing_code:
            logging.info(f"Reenviando código existente a {user.email}")
            
            # Usar el código existente
            from django.templatetags.static import static
            logo_url = request.build_absolute_uri(static('logo.png'))
            context = {
                'user_name': user.first_name or user.username,
                'verification_code': existing_code,
                'user_email': user.email,
                'logo_url': logo_url,
            }
            
            html_content = render_to_string('emails/verification_code.html', context)
            text_content = f"""
            Hola {user.first_name or user.username},

            Tu código de verificación para AciertaPeru es: {existing_code}

            Este código expirará en 20 minutos.

            Saludos,
            Equipo AciertaPeru
            """
            
            email = EmailMultiAlternatives(
                subject='Código de Verificación (Reenviado) - AciertaPeru',
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[user.email]
            )
            
            email.attach_alternative(html_content, "text/html")
            email.send()
            
            logging.info(f"Código reenviado exitosamente a {user.email}")
            return True
        else:
            # Generar nuevo código
            logging.info(f"Generando nuevo código para {user.email}")
            send_verification_code(request, user)
            return True
            
    except Exception as e:
        logging.error(f"Error reenviando código a {user.email}: {e}")
        return False

def resend_2fa_code(request, user, ip_address):
    """Reenvía código 2FA para login"""
    try:
        # Verificar si hay un código activo
        existing_code = cache.get(f'2fa:{user.email}')
        if existing_code:
            logging.info(f"Reenviando código 2FA existente a {user.email}")
            
            # Usar el código existente
            from django.templatetags.static import static
            logo_url = request.build_absolute_uri(static('logo.png'))
            context = {
                'user_name': user.first_name or user.username,
                'verification_code': existing_code,
                'user_email': user.email,
                'logo_url': logo_url,
                'ip_address': ip_address,
                'login_time': timezone.now().strftime('%d/%m/%Y %H:%M:%S'),
                'location': get_location_from_ip(ip_address),
            }
            
            html_content = render_to_string('emails/login_2fa_code.html', context)
            text_content = f"""
            Hola {user.first_name or user.username},

            Tu código de verificación 2FA para AciertaPeru es: {existing_code}

            Este código expirará en 5 minutos.

            Saludos,
            Equipo AciertaPeru
            """
            
            email = EmailMultiAlternatives(
                subject='Código de Acceso (Reenviado) - AciertaPeru',
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[user.email]
            )
            
            email.attach_alternative(html_content, "text/html")
            email.send()
            
            logging.info(f"Código 2FA reenviado exitosamente a {user.email}")
            return True
        else:
            # Generar nuevo código
            logging.info(f"Generando nuevo código 2FA para {user.email}")
            send_2fa_code(request, user, ip_address)
            return True
            
    except Exception as e:
        logging.error(f"Error reenviando código 2FA a {user.email}: {e}")
        return False