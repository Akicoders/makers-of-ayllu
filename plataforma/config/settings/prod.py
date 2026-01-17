"""
Production Settings - Makers of Ayllu
Usa variables de entorno o secret.json
"""
from .base import *
from config.utils import get_secret

# =============================================================================
# Security
# =============================================================================
DEBUG = False

ALLOWED_HOSTS = [
    'localhost', 
    '127.0.0.1', 
    'web',
    '.traefik.me',  # Dominios de Dokploy
]

# Agregar host personalizado desde ENV
_extra_host = get_secret('ALLOWED_HOST', default='')
if _extra_host:
    ALLOWED_HOSTS.append(_extra_host)

# Proxy headers (Traefik/Dokploy)
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
USE_X_FORWARDED_HOST = True
USE_X_FORWARDED_PORT = True

# CSRF
CSRF_TRUSTED_ORIGINS = []
_csrf_origin = get_secret('CSRF_TRUSTED_ORIGIN', default='')
if _csrf_origin:
    CSRF_TRUSTED_ORIGINS.append(_csrf_origin)

# =============================================================================
# Database - SQLite por defecto, PostgreSQL si se configura
# =============================================================================
_db_engine = get_secret('DB_ENGINE', default='')

if _db_engine and 'postgresql' in _db_engine:
    # PostgreSQL configurado
    DATABASES = {
        'default': {
            'ENGINE': _db_engine,
            'NAME': get_secret('DB_NAME'),
            'USER': get_secret('DB_USER'),
            'PASSWORD': get_secret('DB_PASS'),
            'HOST': get_secret('DB_HOST'),
            'PORT': get_secret('DB_PORT'),
            'CONN_MAX_AGE': 60,
        }
    }
elif _db_engine and 'mysql' in _db_engine:
    # MySQL configurado
    DATABASES = {
        'default': {
            'ENGINE': _db_engine,
            'NAME': get_secret('DB_NAME'),
            'USER': get_secret('DB_USER'),
            'PASSWORD': get_secret('DB_PASS'),
            'HOST': get_secret('DB_HOST'),
            'PORT': get_secret('DB_PORT'),
        }
    }
else:
    # SQLite por defecto (simple, funciona sin config)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# =============================================================================
# Cache - Redis si está disponible, sino memoria local
# =============================================================================
_redis_url = get_secret('REDIS_URL', default='')

if _redis_url:
    CACHES = {
        'default': {
            'BACKEND': 'django_redis.cache.RedisCache',
            'LOCATION': _redis_url,
            'OPTIONS': {
                'CLIENT_CLASS': 'django_redis.client.DefaultClient',
            }
        }
    }
else:
    # Cache en memoria local (funciona sin Redis)
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'unique-snowflake',
        }
    }

# =============================================================================
# Static Files
# =============================================================================
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'config' / 'static'
DJANGO_VITE_DEV_MODE = False
