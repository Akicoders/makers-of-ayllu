from .base import *
from config.utils import get_secret

DEBUG = False
ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'web']

DATABASES = {
    'default': {
        'ENGINE': get_secret("DB_ENGINE"),
        'NAME': get_secret("DB_NAME"),
        'USER': get_secret("DB_USER"),
        'PASSWORD': get_secret("DB_PASS"),
        'HOST': get_secret("DB_HOST"),
        'PORT': get_secret("DB_PORT"),
    }
}
