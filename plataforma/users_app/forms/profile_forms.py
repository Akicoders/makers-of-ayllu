from django import forms
from django.contrib.auth.hashers import check_password
from users_app.models import User


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "username", "phone_number"]

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop("user", None)
        super().__init__(*args, **kwargs)

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if User.objects.filter(email=email).exclude(pk=self.user.pk).exists():
            raise forms.ValidationError("Este correo ya está en uso por otro usuario.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get("username")
        if User.objects.filter(username=username).exclude(pk=self.user.pk).exists():
            raise forms.ValidationError("Este nombre de usuario ya está en uso.")
        return username


class PasswordChangeForm(forms.Form):
    current_password = forms.CharField(
        label="Contraseña Actual",
        widget=forms.PasswordInput,
        required=True,
    )
    new_password = forms.CharField(
        label="Nueva Contraseña",
        widget=forms.PasswordInput,
        required=True,
        min_length=8,
    )
    confirm_password = forms.CharField(
        label="Confirmar Nueva Contraseña",
        widget=forms.PasswordInput,
        required=True,
    )

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop("user", None)
        super().__init__(*args, **kwargs)

    def clean_current_password(self):
        current_password = self.cleaned_data.get("current_password")
        if not check_password(current_password, self.user.password):
            raise forms.ValidationError("La contraseña actual es incorrecta.")
        return current_password

    def clean(self):
        cleaned_data = super().clean()
        new_password = cleaned_data.get("new_password")
        confirm_password = cleaned_data.get("confirm_password")
        if new_password and confirm_password and new_password != confirm_password:
            self.add_error("confirm_password", "Las contraseñas nuevas no coinciden.")
        return cleaned_data


class DeleteAccountForm(forms.Form):
    password = forms.CharField(
        label="Tu Contraseña", widget=forms.PasswordInput, required=True
    )

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop("user", None)
        super().__init__(*args, **kwargs)

    def clean_password(self):
        password = self.cleaned_data.get("password")
        if not check_password(password, self.user.password):
            raise forms.ValidationError("La contraseña es incorrecta.")
        return password
