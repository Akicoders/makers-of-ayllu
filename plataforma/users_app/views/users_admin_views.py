from django.core.exceptions import ValidationError
from django.views.decorators.http import require_POST
from users_app.services.users_admin_service import UsersAdminService
from django.contrib.auth.decorators import login_required
from config.utils import create_decrypted_data
from users_app.models import User
from inertia import InertiaResponse
from django.shortcuts import redirect


@login_required(login_url="/")
def users_admin_index_view(request):
    users_data = UsersAdminService.get_users_for_frontend(request.GET)
    roles_and_ranks = UsersAdminService.get_roles_and_ranks()
    services = UsersAdminService.get_services()
    return InertiaResponse(
        request,
        component="Admin/Users/Index",
        props={
            "users": users_data,
            "estado_choices": User.ESTADO_CHOICES,
            "roles": roles_and_ranks["roles"],
            "ranks": roles_and_ranks["ranks"],
            "services": services,
            "user": request.session.pop("user", None),
        },
    )


@login_required(login_url="/")
def users_admin_show_view(request, user_id):
    try:
        user_data = UsersAdminService.get_user_data(user_id)
    except ValidationError:
        return redirect("users_admin_index")

    request.session["user"] = user_data
    return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))


@login_required(login_url="/")
@require_POST
def users_admin_store_view(request):
    data = create_decrypted_data(request)
    try:
        UsersAdminService.create_user(data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))


@login_required(login_url="/")
@require_POST
def users_admin_update_view(request):
    data = create_decrypted_data(request)
    user_id = data.get("id")
    try:
        UsersAdminService.update_user(user_id, data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))


@login_required(login_url="/")
@require_POST
def users_admin_destroy_view(request):
    data = create_decrypted_data(request)
    user_id = data.get("id")
    try:
        UsersAdminService.delete_user(user_id)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))


@login_required(login_url="/")
@require_POST
def user_admin_update_services_view_view(request):
    data = create_decrypted_data(request)
    try:
        result = UsersAdminService.update_user_services(data)
        return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))
    except ValidationError as e:
        return redirect(request.META.get("HTTP_REFERER", "users_admin_index"))
