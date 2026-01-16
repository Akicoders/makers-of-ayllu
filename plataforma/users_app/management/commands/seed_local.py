from django.core.management import call_command
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.db import transaction
from users_app.models import Role, User
# Si usas faker, descomenta: from faker import Faker

class Command(BaseCommand):
    help = "Inserta datos de prueba para Desarrollo (Local)"

    def handle(self, *args, **kwargs):
        self.stdout.write("Ejecutando Seed de Producción primero...")
        call_command('seed_prod')

        try:
            with transaction.atomic():
                # Roles ya deben existir, los recuperamos
                role_cliente = Role.objects.get(name="CLIENTE")
                role_premiun = Role.objects.get(name="PREMIUN")

                # Crear Admin super user
                email = f"admin_mantaro@yopmail.com"
                user, created = User.objects.get_or_create(
                    email=email,
                    defaults={
                        "username": f"admin_mantaro",
                        "first_name": f"Admin",
                        "last_name": f"Mantaro",
                        "password": make_password("password123"),
                        "current_role": role_cliente,
                        "is_superuser": True,
                    },
                )
                if created:
                    self.stdout.write(f"Admin creado: {email}")

                # Crear Usuarios Dummy (Cliente)
                for i in range(1, 6):
                    email = f"cliente_mantaro{i}@yopmail.com"
                    user, created = User.objects.get_or_create(
                        email=email,
                        defaults={
                            "username": f"cliente_mantaro{i}",
                            "first_name": f"Cliente",
                            "last_name": f"{i}",
                            "password": make_password("password123"),
                            "current_role": role_cliente,
                            "is_superuser": False,
                        },
                    )
                    if created:
                        self.stdout.write(f"Cliente creado: {email}")

                # Crear Usuarios Dummy (Premiun)
                for i in range(1, 3):
                    email = f"premium_mantaro{i}@yopmail.com"
                    user, created = User.objects.get_or_create(
                        email=email,
                        defaults={
                            "username": f"premium_mantaro{i}",
                            "first_name": f"Premium",
                            "last_name": f"{i}",
                            "password": make_password("password123"),
                            "current_role": role_premiun,
                            "is_superuser": False,
                        },
                    )
                    if created:
                        self.stdout.write(f"Premium creado: {email}")

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error en el seeder local: {e}"))
            raise e

        self.stdout.write(self.style.SUCCESS("Seed Local completado."))
