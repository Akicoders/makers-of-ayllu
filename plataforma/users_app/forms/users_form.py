from django import forms
from django.contrib.auth.hashers import make_password
from users_app.models import User, Role


class UserForm(forms.ModelForm):
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
            "current_role",
            "credits",
        ]
        widgets = {
            "estado": forms.Select(
                choices=[("ACTIVO", "Activo"), ("BANEADO", "Baneado")]
            ),
            "current_role": forms.Select(),
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
        if commit:
            user.save()
        return user


class UserRegistrationForm(forms.ModelForm):
    """Formulario simplificado para registro de usuarios normales"""
    password = forms.CharField(
        widget=forms.PasswordInput, 
        max_length=128, 
        required=True, 
        label="Contraseña",
        min_length=8,
        error_messages={
            'required': 'La contraseña es obligatoria.',
            'min_length': 'La contraseña debe tener al menos 8 caracteres.'
        }
    )

    hcaptcha = forms.CharField(max_length=10000)
    ip_address = forms.CharField(max_length=10000)

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "username",
            "phone_number",
            "password",
        ]
        widgets = {
            "first_name": forms.TextInput(attrs={'required': True}),
            "last_name": forms.TextInput(attrs={'required': True}),
            "email": forms.EmailInput(attrs={'required': True}),
            "username": forms.TextInput(attrs={'required': True}),
            "phone_number": forms.TextInput(attrs={'required': True, 'maxlength': 9}),
        }
        error_messages = {
            'first_name': {
                'required': 'El nombre es obligatorio.',
                'max_length': 'El nombre no puede exceder 150 caracteres.'
            },
            'last_name': {
                'required': 'El apellido es obligatorio.',
                'max_length': 'El apellido no puede exceder 150 caracteres.'
            },
            'email': {
                'required': 'El correo electrónico es obligatorio.',
                'invalid': 'Ingrese un correo electrónico válido.'
            },
            'username': {
                'required': 'El nombre de usuario es obligatorio.',
                'max_length': 'El nombre de usuario no puede exceder 150 caracteres.'
            },
            'phone_number': {
                'required': 'El número de teléfono es obligatorio.',
                'max_length': 'El número de teléfono no puede exceder 9 caracteres.'
            }
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # Hacer campos obligatorios
        required_fields = ['first_name', 'last_name', 'email', 'username', 'phone_number']
        
        for field_name in required_fields:
            if field_name in self.fields:
                self.fields[field_name].required = True

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if not email:
            raise forms.ValidationError("El correo electrónico es obligatorio.")
        
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Este correo ya está en uso.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get("username")
        if not username:
            raise forms.ValidationError("El nombre de usuario es obligatorio.")
            
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError("Este nombre de usuario ya existe.")
        return username

    def clean_phone_number(self):
        phone = self.cleaned_data.get("phone_number")
        if not phone:
            raise forms.ValidationError("El número de teléfono es obligatorio.")
        
        if not phone.isdigit():
            raise forms.ValidationError("El número de teléfono solo puede contener dígitos.")
        
        if len(phone) != 9:
            raise forms.ValidationError("El número de teléfono debe tener exactamente 9 dígitos.")
        
        return phone

    def clean_first_name(self):
        first_name = self.cleaned_data.get("first_name")
        if not first_name or not first_name.strip():
            raise forms.ValidationError("El nombre es obligatorio.")
        return first_name.strip()

    def clean_last_name(self):
        last_name = self.cleaned_data.get("last_name")
        if not last_name or not last_name.strip():
            raise forms.ValidationError("El apellido es obligatorio.")
        return last_name.strip()

    def save(self, commit=True):
        user = super().save(commit=False)
        
        # Hash de la contraseña
        user.password = make_password(self.cleaned_data["password"])
        
        # Asignar valores por defecto
        try:
            default_role = Role.objects.get(name="CLIENTE")
            user.current_role = default_role
        except Role.DoesNotExist:
            raise forms.ValidationError("No se encontró el rol CLIENTE. Contacte al administrador.")
                
        # Valores por defecto para otros campos
        user.estado = "ACTIVO"
        user.is_superuser = False
        
        if commit:
            user.save()
        return user

