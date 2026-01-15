# Agregar esto a tu archivo forms.py
from django import forms

class VerificationCodeForm(forms.Form):
    code = forms.CharField(
        max_length=6,
        min_length=6,
        required=True,
        error_messages={
            'required': 'El código de verificación es requerido.',
            'max_length': 'El código debe tener exactamente 6 caracteres.',
            'min_length': 'El código debe tener exactamente 6 caracteres.',
        }
    )
    
    def clean_code(self):
        code = self.cleaned_data.get('code')
        if code:
            # Convertir a mayúsculas y eliminar espacios
            code = code.upper().strip()
            # Validar que solo contenga caracteres alfanuméricos
            if not code.isalnum():
                raise forms.ValidationError('El código solo puede contener letras y números.')
        return code