"""
Production Settings - Makers of Ayllu
Compatible con Dokploy/Docker - Con Nginx
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
    '*',  # Aceptar cualquier host para Dokploy
]

# =============================================================================
# Database - SQLite por defecto, PostgreSQL/MySQL si se configura
# =============================================================================
_db_engine = get_secret('DB_ENGINE', default='')

if _db_engine and 'postgresql' in _db_engine:
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
elif _db_engine and 'mysql' in _db_engine:
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
    # SQLite por defecto
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# =============================================================================
# Cache - Redis si está disponible
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
STATIC_ROOT = BASE_DIR / 'static'
DJANGO_VITE_DEV_MODE = False
