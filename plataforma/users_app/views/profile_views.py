from django.core.exceptions import ValidationError
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.views.decorators.http import require_POST
from django.shortcuts import redirect
from inertia import InertiaResponse

from config.utils import create_decrypted_data
from users_app.services.profile_service import ProfileService


@login_required(login_url="/")
def profile_index_view(request):
    profile_data = ProfileService.get_profile_data(request.user)
    return InertiaResponse(request, component="Profile/Index", props=profile_data)


@login_required(login_url="/")
@require_POST
def profile_update_view(request):
    data = create_decrypted_data(request)
    try:
        ProfileService.update_profile(request.user, data)
        request.session["success"] = "Perfil actualizado correctamente."
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect("profile_index")


@login_required(login_url="/")
@require_POST
def profile_change_password_view(request):
    data = create_decrypted_data(request)
    try:
        ProfileService.change_password(request.user, data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect("profile_index")


@login_required(login_url="/")
@require_POST
def profile_delete_account_view(request):
    data = create_decrypted_data(request)
    try:
        ProfileService.delete_account(request.user, data)
        logout(request)
        return redirect("login")
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect("profile_index")
