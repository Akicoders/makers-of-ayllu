from datetime import timedelta
from django.utils import timezone
from users_app.models import LogBlockedUser, LoginIncorrect, SessionUser


def get_last_reset_or_24h(user_id, is_login_attempt):
    now = timezone.now()
    window_start = now - timedelta(hours=24)
    reset_entry = (
        LogBlockedUser.objects.filter(
            user_id=user_id,
            login_time__gte=window_start,
            is_active=False,
            is_login_attempt=is_login_attempt,
        )
        .order_by("-login_time")
        .first()
    )
    return reset_entry.login_time if reset_entry else window_start


def has_logged_incorrect_too_many_times(user_id):
    window_start = get_last_reset_or_24h(user_id, True)
    failed_attempts = LoginIncorrect.objects.filter(
        user_id=user_id, login_time__gte=window_start
    ).count()
    return failed_attempts >= 5


def get_remaining_block_time(user_id):
    window_start = get_last_reset_or_24h(user_id, True)
    first_attempt = (
        LoginIncorrect.objects.filter(user_id=user_id, login_time__gte=window_start)
        .order_by("login_time")
        .first()
    )
    if first_attempt:
        block_until = first_attempt.login_time + timedelta(hours=24)
        return block_until - timezone.now()
    return timedelta(0)


def has_logged_in_multiple_ips(user_id):
    window_start = get_last_reset_or_24h(user_id, False)
    unique_ips = (
        SessionUser.objects.filter(user_id=user_id, login_time__gte=window_start)
        .values("ip_address")
        .distinct()
        .count()
    )
    return unique_ips >= 5


def exists_login_block_record(user_id, is_login_attempt):
    today = timezone.now().date()
    return LogBlockedUser.objects.filter(
        user_id=user_id,
        is_login_attempt=is_login_attempt,
        login_time__date=today,
        is_active=True,
    ).exists()
