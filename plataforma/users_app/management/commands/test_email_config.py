from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.conf import settings
import traceback

class Command(BaseCommand):
    help = 'Test email configuration'

    def handle(self, *args, **kwargs):
        self.stdout.write("Testing email configuration...")
        self.stdout.write(f"EMAIL_HOST: {settings.EMAIL_HOST}")
        self.stdout.write(f"EMAIL_PORT: {settings.EMAIL_PORT}")
        self.stdout.write(f"EMAIL_USE_TLS: {settings.EMAIL_USE_TLS}")
        self.stdout.write(f"EMAIL_USE_SSL: {settings.EMAIL_USE_SSL}")
        self.stdout.write(f"EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
        self.stdout.write(f"DEFAULT_FROM_EMAIL: {settings.DEFAULT_FROM_EMAIL}")

        try:
            from django.core.cache import cache
            self.stdout.write("Testing Cache (Redis)...")
            cache.set('test_key', 'test_value', 10)
            val = cache.get('test_key')
            if val == 'test_value':
                 self.stdout.write(self.style.SUCCESS('Successfully tested Cache'))
            else:
                 self.stdout.write(self.style.ERROR(f'Cache test failed: Expected test_value, got {val}'))
        except Exception as e:
             self.stdout.write(self.style.ERROR(f'Cache connection failed: {e}'))

        try:
            from django.template.loader import render_to_string
            from django.templatetags.static import static
            # Mock request object? No, we can't easily mock request.build_absolute_uri without a request.
            # But the error might be in static() if manifest is missing (vite).
            
            self.stdout.write("Testing Template Rendering...")
            context = {
                'user_name': 'Test User',
                'verification_code': '123456',
                'user_email': settings.EMAIL_HOST_USER, # Use valid email
                'logo_url': '/static/logo.png', # Placeholder
                'ip_address': '127.0.0.1',
                'login_time': 'Now',
                'location': 'Test Location',
            }
            # We skip request.build_absolute_uri since we don't have request in management command easily
            # But we test if template exists and parses.
            render_to_string('emails/login_2fa_code.html', context)
            self.stdout.write(self.style.SUCCESS('Successfully rendered template'))
            
            # Test static - might fail if manifest.json is missing?
            # s = static('logo.png')
            # self.stdout.write(f"Static resolved to: {s}")

        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Template rendering failed: {e}'))
            self.stdout.write(traceback.format_exc())

        try:
            send_mail(
                'Test Subject',
                'Test message body.',
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER], # Send to self
                fail_silently=False,
            )
            self.stdout.write(self.style.SUCCESS('Successfully sent test email'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Failed to send email: {e}'))
            self.stdout.write(traceback.format_exc())
