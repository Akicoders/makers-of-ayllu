#!/bin/bash
set -e

if [ "$DJANGO_SETTINGS_MODULE" = "config.settings.local" ]; then
    echo "Running in development mode"

    # Verificar e instalar dependencias de Node si es necesario
    cd /app/plataforma/frontend
    if [ ! -d "node_modules/@tiptap" ]; then
        echo "Installing Node dependencies..."
        pnpm install --no-frozen-lockfile
    fi

    # Build del frontend
    echo "Building frontend..."
    pnpm run build

    # Iniciar Vite en modo dev en background
    echo "Starting Vite dev server..."
    pnpm run dev &

    # Backend
    cd /app/plataforma
    echo "Running Django migrations..."
    python manage.py makemigrations --settings=config.settings.local
    python manage.py migrate --settings=config.settings.local
    python manage.py collectstatic --noinput --clear --settings=config.settings.local

    # Ejecutar seed solo la primera vez
    if [ ! -f /app/.seeded ]; then
        echo "Running initial seed..."
        python manage.py seed_initial_data --settings=config.settings.local
        touch /app/.seeded
    else
        echo "Seed already executed, skipping."
    fi

    echo "Starting Django development server..."
    python manage.py runserver 0.0.0.0:8000 --settings=config.settings.local
else
    echo "Running in production mode"

    # Build del frontend
    cd /app/plataforma/frontend
    pnpm install --frozen-lockfile
    pnpm run build

    cd /app/plataforma
    python manage.py makemigrations --settings=config.settings.prod
    python manage.py migrate --settings=config.settings.prod
    python manage.py collectstatic --noinput --clear --settings=config.settings.prod

    # Ejecutar seed solo la primera vez
    if [ ! -f /app/.seeded ]; then
        echo "Running initial seed..."
        python manage.py seed_initial_data --settings=config.settings.prod 
        touch /app/.seeded
    else
        echo "Seed already executed, skipping."
    fi

    export DJANGO_SETTINGS_MODULE=config.settings.prod
    gunicorn --timeout 300 --workers 3 --threads 3 --bind 0.0.0.0:8000 config.wsgi:application
fi