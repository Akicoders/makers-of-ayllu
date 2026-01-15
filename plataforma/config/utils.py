import json
from django.shortcuts import render as render_html
import os
import time
from django.conf import settings
from django.http import JsonResponse
from functools import wraps
from django.core.exceptions import ImproperlyConfigured
from django.shortcuts import redirect
from inertia import render
from functools import wraps
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django_ratelimit.core import is_ratelimited
import secrets
from django.core.cache import cache
import base64
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend



with open("secret.json") as f:
    secret = json.loads(f.read())


def get_secret(secret_name, secrets=secret):
    try:
        return secrets[secret_name]
    except:
        msg = f"The variable {secret_name} doesn't exit"
        raise ImproperlyConfigured(msg)


def role_required(role):
    """
    Decorador para verificar que el usuario tiene el rol requerido.
    El rol puede ser 'Admin', 'Vendedor', o 'Cliente'.
    """

    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            user = request.user

            if user.is_authenticated:
                if role == 'Admin' and user.is_admin:
                    return view_func(request, *args, **kwargs)
                elif role == 'Vendedor' and user.is_staff:
                    return view_func(request, *args, **kwargs)
                elif role == 'Moderador' and user.is_mod:
                    return view_func(request, *args, **kwargs)
                elif role == 'Cliente' and not user.is_admin and not user.is_staff and not user.is_mod:
                    return view_func(request, *args, **kwargs)
                else:
                    return redirect('/dashboard/')
            else:
                return redirect('/dashboard/')

        return _wrapped_view

    return decorator


def require_valid_token(view_func):
    def wrapper(request, *args, **kwargs):
        session_token_cookie = request.COOKIES.get('session_token')
        session_token_server = request.session.get('session_token')

        if not session_token_cookie or session_token_cookie != session_token_server:
            return JsonResponse({'error': 'Acceso denegado'}, status=403)

        return view_func(request, *args, **kwargs)

    return wrapper

MAX_REQUESTS = 7
WINDOW_SECONDS = 60

def is_user_rate_limited(user_id):
    cache_key = f"user_rate_limit:{user_id}"
    now = int(time.time())

    timestamps = cache.get(cache_key, [])
    valid_timestamps = [ts for ts in timestamps if now - ts < WINDOW_SECONDS]

    valid_timestamps.append(now)
    cache.set(cache_key, valid_timestamps, timeout=WINDOW_SECONDS)

    if valid_timestamps:
        elapsed_since_first = now - valid_timestamps[0]
    else:
        elapsed_since_first = 0

    if len(valid_timestamps) > MAX_REQUESTS:
        retry_after = WINDOW_SECONDS - elapsed_since_first
        return True, retry_after, elapsed_since_first

    return False, None, elapsed_since_first


def is_user_rate_limited_3s(user_id):
    cache_key = f"user_rate_limit_3s:{user_id}"
    now = int(time.time())

    last_ts = cache.get(cache_key)
    if last_ts:
        elapsed = now - last_ts
        if elapsed < 3:
            retry_after = 3 - elapsed
            return True, retry_after, elapsed
    cache.set(cache_key, now, timeout=3)
    return False, None, 0


def protected_post(module_name, redirect_url=None):
    def decorator(view_func):
        view_func.is_protected_post = True

        @wraps(view_func)
        @login_required(login_url='/')
        @require_http_methods(['POST'])
        def wrapped_view(request, *args, **kwargs):
            user = request.user
            user_key = f"ratelimit_exceed_count:{user.id}"

            #per_minute_limited = is_ratelimited(request=request,fn=view_func,key=lambda group, req: f"user:{req.user.id}",rate='7/m',method='POST',increment=True)
            
            per_second_limited = is_ratelimited(request=request,fn=view_func,key=lambda group, req: f"user:{req.user.id}",rate='1/s',method='POST',increment=True)
            if per_second_limited:
                current_count = cache.get(user_key, 0) + 1
                cache.set(user_key, current_count, timeout=60)

                if current_count >= 2:
                    user.is_active = False
                    user.save()
                    #logout(request)
                    return redirect("/")

                return render_html(request, "rate_limit_warning.html", status=429)

            per_3_second_limited, _, _ = is_user_rate_limited_3s(user.id)
            if per_3_second_limited:
                return render_html(request, 'rate_limit_warning.html', status=429)

            per_minute_limited, _, _ = is_user_rate_limited(user.id)
            if per_minute_limited:
                return render_html(request, 'rate_limit_warning.html', status=429)
            
            return view_func(request, *args, **kwargs)

        wrapped_view.is_protected_post = True
        return wrapped_view
    return decorator




def load_private_key():
    key_path = os.path.join(settings.BASE_APP, 'private.pem')
    with open(key_path, 'rb') as key_file:
        private_key = serialization.load_pem_private_key(
            key_file.read(),
            password=None,  
            backend=default_backend()
        )
    return private_key


def decrypt_payload(payload_b64):
    private_key = load_private_key()
    encrypted_data = base64.b64decode(payload_b64)
    decrypted_data = private_key.decrypt(
        encrypted_data,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    return decrypted_data.decode('utf-8')

    
def create_decrypted_data(request):
    """
    Devuelve un dict con los datos desencriptados y los que vienen en claro.
    """
    try:
        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        payload_b64 = body.get("payload")
        if not payload_b64:
            raise ValueError("Missing payload")

        encrypted_bytes = base64.b64decode(payload_b64)
        private_key = load_private_key()

        decrypted_bytes = private_key.decrypt(
            encrypted_bytes,
            padding.OAEP(
                mgf=padding.MGF1(hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None,
            ),
        )
        decrypted_json = decrypted_bytes.decode("utf-8")
        data = json.loads(decrypted_json)

        if isinstance(data, str):
            data = json.loads(data)

        if not isinstance(data, dict):
            raise ValueError("Decrypted data is not a dictionary")

        for key, value in body.items():
            if key != "payload":
                data[key] = value

        return data

    except Exception as e:
        print(f"[Decryption Error] {e}")
        return {}
