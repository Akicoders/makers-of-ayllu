# Usar Python 3.10.12-slim-bullseye como imagen base
FROM python:3.10.12-slim-bullseye

# Establecer variables de entorno
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive

# Instalar dependencias del sistema
RUN sed -i 's|http://deb.debian.org|https://deb.debian.org|g' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y \
      curl \
      gnupg \
      build-essential \
      pkg-config \
      libmariadb-dev && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Crear directorio para la aplicación
WORKDIR /app

# Copiar requirements.txt
COPY requirements.txt .

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt && \
    pip install gunicorn

# Copiar package.json y pnpm-lock.yaml primero (para cache)
COPY plataforma/frontend/package.json plataforma/frontend/pnpm-lock.yaml /app/plataforma/frontend/

# Instalar dependencias de Node (sin frozen-lockfile en dev)
WORKDIR /app/plataforma/frontend
RUN pnpm install --no-frozen-lockfile

# Copiar el resto del código
WORKDIR /app
COPY . .

# Copiar y dar permisos al script de inicio
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]