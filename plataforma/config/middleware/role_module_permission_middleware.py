from django.shortcuts import redirect
from django.urls import resolve


def role_module_permission_middleware(get_response):

    GLOBAL_MODULES = {"dashboard", "profile", "configuration"}

    ACTION_MAP = {
        "index": "can_read",
        "show": "can_read",
        "store": "can_create",
        "update": "can_update",
        "destroy": "can_delete",
    }

    def middleware(request):
        if not request.user.is_authenticated:
            return get_response(request)

        resolver_match = resolve(request.path)
        if not resolver_match:
            return get_response(request)

        view_name = resolver_match.url_name
        if not view_name:
            return get_response(request)

        parts = view_name.split("_")

        action = None
        for part in reversed(parts):
            if part in ACTION_MAP:
                action = part
                break

        if not action:
            return get_response(request)

        module_name = "_".join(parts[: parts.index(action)])

        if not module_name:
            return get_response(request)

        if module_name in GLOBAL_MODULES:
            return get_response(request)

        user_role = getattr(request.user, "current_role", None)
        if not user_role:
            return redirect("dashboard")


        permission_field = ACTION_MAP[action]
        if not getattr(permission_field, False):
            return redirect("dashboard")

        return get_response(request)

    return middleware
