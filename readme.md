sudo docker compose -f docker-compose.dev.yml up --build

docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml down -v

# Ver logs de todos los contenedores
docker compose -f docker-compose.prod.yml logs -f

# Ver logs solo de nginx
docker compose -f docker-compose.prod.yml logs -f nginx

# Ver logs solo de web
docker compose -f docker-compose.prod.yml logs -f web

# Entrar al contenedor de nginx
docker exec -it <nginx-container-id> sh
