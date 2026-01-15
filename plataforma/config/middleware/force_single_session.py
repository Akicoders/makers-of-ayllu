from django.contrib.auth import logout
from users_app.models import SessionUser


def force_single_session(get_response):
    def middleware(request):
        user = getattr(request, "user", None)
        if user and user.is_authenticated:
            current_session_id = request.session.get("session_user_id")

            latest_session = (
                SessionUser.objects.filter(user=user).order_by("-login_time").first()
            )

            if not current_session_id or not latest_session:
                return get_response(request)

            if str(latest_session.id) != current_session_id:
                logout(request)

        return get_response(request)

    return middleware
