FROM nginx:1.27-alpine

# Copiamos la configuración
COPY nginx.conf /etc/nginx/nginx.conf

# Creamos directorios para static y media
RUN mkdir -p /var/www/plataforma/config/static /var/www/plataforma/config/media
