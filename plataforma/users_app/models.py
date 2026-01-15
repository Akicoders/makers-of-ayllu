import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.contrib.auth.validators import UnicodeUsernameValidator

from users_app.managers import UserManager

# En users_app/models.py

class Role(models.Model):
    id_rol = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, db_column="id_rol"
    )
    name = models.CharField(max_length=50, db_column="nombre_rol")

    class Meta:
        db_table = "roles"

    def __str__(self):
        return self.name


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(
        ("email"),
        max_length=150,
        unique=True,
        null=True,
        blank=True,
        help_text=("Required. A valid email address."),
        error_messages={
            "unique": ("A user with that email already exists."),
        },
    )
    password = models.CharField(("password"), max_length=128, default="12345678")
    username = models.CharField(
        ("username"),
        max_length=150,
        unique=False,
        null=True,
        blank=True,
        help_text=("150 characters or fewer. Letters, digits and @/./+/-/_ only."),
        validators=[UnicodeUsernameValidator()],
    )
    first_name = models.CharField(max_length=150, blank=True, db_column="nombre")
    last_name = models.CharField(("last name"), max_length=150, null=True, blank=True)
    date_joined = models.DateTimeField(
        ("date joined"), default=timezone.now, null=True, blank=True
    )

    phone_number = models.CharField(blank=True, null=True, max_length=9, default="")
    reset_password_token = models.CharField(max_length=100, blank=True, null=True)
    is_enable_bloked = models.BooleanField(default=True)
    credits = models.PositiveIntegerField(default=5, null=True, db_column="coins")
    created_date = models.DateTimeField(auto_now_add=True, db_column="fecha_registro")
    created_by = models.ForeignKey(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="created_users",
    )

    ESTADO_CHOICES = [
        ("ACTIVO", "Activo"),
        ("BANEADO", "Baneado"),
    ]
    estado = models.CharField(
        max_length=10,
        choices=ESTADO_CHOICES,
        default="ACTIVO",
        db_column="estado",
        help_text=("Estado del usuario: ACTIVO o BANEADO."),
    )

    current_role = models.ForeignKey(
        "Role",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        db_column="id_rol",
    )

    is_superuser = models.BooleanField(("superuser status"), default=False)
    Time_espera = models.PositiveIntegerField(default=0, null=True)
    antispam = models.PositiveIntegerField(default=60)
    user_keys = models.PositiveIntegerField(default=0)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = UserManager()

    class Meta:
        ordering = ["id"]
        db_table = "usuarios"

    def __str__(self):
        return f"Usuario: {self.first_name} {self.last_name}"


class SessionUser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    user_agent = models.CharField(max_length=255, blank=True, null=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)


class LogBlockedUser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    is_login_attempt = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    login_time = models.DateTimeField(auto_now_add=True)


class LoginIncorrect(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    login_time = models.DateTimeField(auto_now_add=True)
