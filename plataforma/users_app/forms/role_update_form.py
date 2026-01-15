from django import forms
from users_app.models import Role


class RoleUpdateForm(forms.ModelForm):
    class Meta:
        model = Role
        fields = ["name"]

    def __init__(self, *args, **kwargs):
        self.role_id = kwargs.pop("role_id", None)
        super().__init__(*args, **kwargs)

    def clean_name(self):
        name = self.cleaned_data.get("name")
        qs = Role.objects.filter(name=name)
        if self.role_id:
            qs = qs.exclude(id_rol=self.role_id)
        if qs.exists():
            raise forms.ValidationError("Ya existe un rol con este nombre.")
        return name
