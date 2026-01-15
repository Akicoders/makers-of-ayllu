from django import forms
from django.contrib.auth.hashers import make_password
from users_app.models import User, Role


class CustomerForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput, max_length=128, required=True, label="Contraseña"
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
        widgets = {
            "current_rank": forms.Select(),
        }

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Este correo ya está en uso.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get("username")
        if username and User.objects.filter(username=username).exists():
            raise forms.ValidationError("Este nombre de usuario ya existe.")
        return username

    def save(self, commit=True):
        user = super().save(commit=False)
        user.password = make_password(self.cleaned_data["password"])

        try:
            cliente_role = Role.objects.get(name__iexact="CLIENTE")
        except Role.DoesNotExist:
            raise forms.ValidationError("El rol CLIENTE no existe en el sistema.")

        user.current_role = cliente_role

        if commit:
            user.save()
        return user
