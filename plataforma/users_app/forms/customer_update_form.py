from django import forms
from django.contrib.auth.hashers import make_password
from users_app.models import User, Role


class CustomerUpdateForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput,
        max_length=128,
        required=False,
        label="Contraseña (opcional)",
    )

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "username",
            "phone_number",
            "password",
            "credits",
        ]

    def __init__(self, *args, **kwargs):
        self.user_id = kwargs.pop("user_id", None)
        super().__init__(*args, **kwargs)

    def clean_email(self):
        email = self.cleaned_data.get("email")
        qs = User.objects.filter(email=email)
        if self.user_id:
            qs = qs.exclude(id=self.user_id)
        if qs.exists():
            raise forms.ValidationError("Este correo ya está en uso.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get("username")
        qs = User.objects.filter(username=username)
        if self.user_id:
            qs = qs.exclude(id=self.user_id)
        if qs.exists():
            raise forms.ValidationError("Este nombre de usuario ya existe.")
        return username

    def clean_credits(self):
        credits = self.cleaned_data.get("credits")
        if self.instance and self.instance.pk:
            current_credits = self.instance.credits
            if credits < current_credits:
                raise forms.ValidationError(
                    f"No puedes reducir créditos. Actualmente tiene {current_credits}."
                )
        return credits

    def save(self, commit=True):
        user = super().save(commit=False)

        if self.cleaned_data.get("password"):
            user.password = make_password(self.cleaned_data["password"])

        try:
            cliente_role = Role.objects.get(name__iexact="CLIENTE")
        except Role.DoesNotExist:
            raise forms.ValidationError("El rol CLIENTE no existe en el sistema.")

        user.current_role = cliente_role

        if commit:
            user.save()
        return user
