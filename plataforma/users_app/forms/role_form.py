from django import forms
from users_app.models import Role


class RoleForm(forms.ModelForm):
    class Meta:
        model = Role
        fields = ["name"]

    def clean_name(self):
        name = self.cleaned_data.get("name")
        if Role.objects.filter(name=name).exists():
            raise forms.ValidationError("Ya existe un rol con este nombre.")
        return name
