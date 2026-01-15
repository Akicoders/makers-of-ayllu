from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from users_app.forms.profile_forms import (
    ProfileUpdateForm,
    PasswordChangeForm,
    DeleteAccountForm,
)
from users_app.models import SessionUser

class ProfileService:

    @staticmethod
    def get_profile_data(user):
        user_details = {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "username": user.username,
            "phone_number": user.phone_number,
            "date_joined": user.date_joined.strftime("%d de %B de %Y"),
        }

        latest_sessions = SessionUser.objects.filter(user=user).order_by("-login_time")[:2]

        current_session_data = None
        previous_session_data = None

        def format_session_data(session):
            if not session:
                return None
            
            return {
                "id": session.id,
                "ip_address": session.ip_address or "No registrada",
                "login_time": session.login_time.strftime("%d/%m/%Y, %H:%M:%S"),
            }

        if len(latest_sessions) > 0:
            current_session_data = format_session_data(latest_sessions[0])
        
        if len(latest_sessions) > 1:
            previous_session_data = format_session_data(latest_sessions[1])

        return {
            "user_details": user_details,
            "current_session": current_session_data,
            "previous_session": previous_session_data,
        }

    @staticmethod
    def update_profile(user, data):
        form = ProfileUpdateForm(data, instance=user, user=user)
        if not form.is_valid():
            raise ValidationError(form.errors)
        form.save()
        return {"message": "Perfil actualizado correctamente."}

    @staticmethod
    def change_password(user, data):
        form = PasswordChangeForm(data, user=user)
        if not form.is_valid():
            raise ValidationError(form.errors)

        user.password = make_password(form.cleaned_data["new_password"])
        user.save(update_fields=["password"])
        return {"message": "Contraseña cambiada con éxito."}

    @staticmethod
    def delete_account(user, data):
        form = DeleteAccountForm(data, user=user)
        if not form.is_valid():
            raise ValidationError(form.errors)

        user.delete()
        return {"message": "Cuenta eliminada."}
