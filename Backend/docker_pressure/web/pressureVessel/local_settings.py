import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = '04ynd%4&6gsfiaz*!bpe#2n%*id&96_xs5ndqo^vw4jr6y8ls%'
SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.getenv('DEBUG', 'NO').lower() in ('on', 'true', 'y', 'yes')

ALLOWED_HOSTS = ['*']

CORS_ORIGIN_WHITELIST = (
    'localhost:3000',
)

CORS_ALLOW_HEADERS = (
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'responseType',
)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['DB_NAME'],
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PASS'],
        'HOST': os.environ['DB_SERVICE'],
        'PORT': os.environ['DB_PORT']
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
MEDIA_URL = 'media/'