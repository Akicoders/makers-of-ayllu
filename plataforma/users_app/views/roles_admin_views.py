from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.shortcuts import redirect
from django.core.exceptions import ValidationError
from inertia import InertiaResponse
from config.utils import create_decrypted_data
from users_app.services.roles_service import RolesService


@login_required(login_url='/')
def roles_admin_index_view(request):
    roles = RolesService.get_roles(request.GET)
    return InertiaResponse(
        request,
        "Admin/Roles/Index",
        props={
            "roles": roles,
            "role": request.session.pop("role", None),
        },
    )


@login_required(login_url='/')
def roles_admin_show_view(request, role_id):
    try:
        role_data = RolesService.get_role_data(role_id)
        request.session["role"] = role_data
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "roles_admin_index"))


@login_required(login_url='/')
@require_POST
def roles_admin_store_view(request):
    data = create_decrypted_data(request)
    try:
        RolesService.create_role(data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "roles_admin_index"))


@login_required(login_url='/')
@require_POST
def roles_admin_update_view(request):
    data = create_decrypted_data(request)
    try:
        RolesService.update_role(data.get("id"), data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "roles_admin_index"))


@login_required(login_url='/')
@require_POST
def roles_admin_destroy_view(request):
    data = create_decrypted_data(request)
    try:
        RolesService.delete_role(data.get("id"))
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "roles_admin_index"))
