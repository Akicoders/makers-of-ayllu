from django.conf import settings
from inertia import share


def inertia_share(get_response):
    def middleware(request):
        user_data = None
        role_data = None

        if request.user.is_authenticated:
            user = request.user

            user_data = {
                "username": user.username,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "phone_number": user.phone_number,
                "credits": user.credits,
                "email": user.email,
            }

            if user.current_role:
                role_data = {
                    "name": user.current_role.name,
                }

        share(
            request,
            app_name=settings.APP_NAME,
            auth=lambda: {
                "user": user_data,
                "role": role_data,
            },
            errors=lambda: request.session.pop("errors", {}),
        )

        return get_response(request)

    return middleware
