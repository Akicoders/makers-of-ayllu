#!/bin/bash
set -e

if [ "$DJANGO_SETTINGS_MODULE" = "config.settings.local" ]; then
    echo "========================================"
    echo " Running in DEVELOPMENT mode"
    echo "========================================"

    cd /app/plataforma/frontend
    
    # Instalar dependencias si es necesario
    if [ ! -d "node_modules/@tiptap" ]; then
        echo "Installing Node dependencies..."
        pnpm install --no-frozen-lockfile
    fi

    # Build del frontend
    echo "Building frontend..."
    pnpm run build

    # Iniciar Vite en background
    echo "Starting Vite dev server..."
    pnpm run dev &

    # Django
    cd /app/plataforma
    echo "Running Django migrations..."
    python manage.py makemigrations --settings=config.settings.local
    python manage.py migrate --settings=config.settings.local
    python manage.py collectstatic --noinput --clear --settings=config.settings.local

    # Seed inicial
    if [ ! -f /app/.seeded ]; then
        echo "Running initial seed..."
        python manage.py seed_local --settings=config.settings.local || true
        touch /app/.seeded
    fi

    echo "Starting Django development server..."
    python manage.py runserver 0.0.0.0:8000 --settings=config.settings.local

else
    echo "========================================"
    echo " Running in PRODUCTION mode"
    echo "========================================"

    # Build del frontend
    cd /app/plataforma/frontend
    echo "Installing frontend dependencies..."
    pnpm install --frozen-lockfile || pnpm install --no-frozen-lockfile
    echo "Building frontend..."
    pnpm run build

    cd /app/plataforma

    # Esperar un poco para que Redis esté listo
    echo "Waiting for services..."
    sleep 5

    # Migraciones
    echo "Running migrations..."
    python manage.py migrate --noinput --settings=config.settings.prod

    # Archivos estáticos
    echo "Collecting static files..."
    python manage.py collectstatic --noinput --settings=config.settings.prod

    # Seed inicial
    if [ ! -f /app/.seeded ]; then
        echo "Running initial seed..."
        python manage.py seed_prod --settings=config.settings.prod || true
        touch /app/.seeded
    fi

    echo ""
    echo "========================================"
    echo " Starting Gunicorn on port 8000"
    echo "========================================"

    export DJANGO_SETTINGS_MODULE=config.settings.prod
    exec gunicorn \
        --timeout 300 \
        --workers 3 \
        --threads 3 \
        --bind 0.0.0.0:8000 \
        --access-logfile - \
        --error-logfile - \
        config.wsgi:application
fi