from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.db import transaction
from users_app.models import Role, User


class Command(BaseCommand):
    help = "Inserta roles y usuario inicial"

    def handle(self, *args, **kwargs):
        try:
            with transaction.atomic():
                # Roles
                roles = ["ADMIN", "CLIENTE", "PREMIUN"]
                role_objs = {}
                for role_name in roles:
                    role, _ = Role.objects.get_or_create(name=role_name)
                    role_objs[role_name] = role
                self.stdout.write(self.style.SUCCESS("Roles creados/verificados."))

                # Usuario inicial
                role_admin = role_objs["ADMIN"]
                user, created = User.objects.get_or_create(
                    email="user_plataforma_mantaro@yopmail.com",
                    defaults={
                        "username": "usuario1",
                        "first_name": "Usuario1",
                        "last_name": "Apellido1",
                        "password": make_password("usuario1234"),
                        "current_role": role_admin,
                        "is_superuser": True,
                    },
                )
                if created:
                    self.stdout.write(self.style.SUCCESS("Usuario inicial creado."))
                else:
                    self.stdout.write(self.style.WARNING("Usuario ya existía."))

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error en el seeder: {e}"))
            raise e

        self.stdout.write(self.style.SUCCESS("Seed completado."))
