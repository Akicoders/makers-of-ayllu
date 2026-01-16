# Documentación del Proyecto Plataforma Django

## 1. Configuración y Despliegue

Este proyecto utiliza Docker para la gestión de contenedores tanto en desarrollo como en producción.

### Requisitos Previos
- Docker y Docker Compose instalados.

### Comandos Principales

#### Desarrollo
Levantar el entorno de desarrollo (con hot-reloading si está configurado):
```bash
docker compose -f docker-compose.dev.yml up --build
```

#### Producción
Levantar el entorno de producción (Nginx + Gunicorn):
```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Ver logs:
```bash
docker compose -f docker-compose.prod.yml logs -f
```

## 2. Arquitectura del Proyecto

El proyecto sigue una arquitectura modular de Django, separando responsabilidades claramente.

### Estructura de Directorios (Resumen)
- `plataforma/`: Root del proyecto Django.
    - `config/`: Configuraciones globales (settings, urls, wsgi, middleware).
    - `users_app/`: Aplicación principal de gestión de usuarios, roles y autenticación.
    - `core_app/`: Funcionalidades núcleo compartidas.
    - `frontend/`: Recursos estáticos y templates (Inertia.js / Vue / React si aplica).

### Patrón View-Service
Para mantener las vistas (`views.py`) limpias, la lógica de negocio compleja se extrae a servicios (`services/`).

**Regla de Oro**:
- **Vista**: Maneja la petición HTTP, valida entrada básica, llama al servicio y retorna la respuesta (HTML/JSON/Inertia).
- **Servicio**: Contiene la lógica de negocio, validaciones complejas, consultas a BD y envío de emails.

Ejemplo:
- `users_admin_views.py` delega en `UsersAdminService`.

## 3. Autenticación y Permisos

El sistema utiliza un middleware personalizado para el control de acceso basado en roles (RBAC).

### Middleware: `role_module_permission_middleware`
Ubicación: `plataforma/config/middleware/role_module_permission_middleware.py`

Este middleware intercepta cada petición y verifica:
1.  Si la ruta es **Pública** (Login, Registro, etc.) -> Permite acceso.
2.  Si la ruta es **Autenticada General** (Dashboard, Perfil) -> Permite acceso si está logueado.
3.  Si la ruta pertenece a un **Módulo Restringido** (`users_admin`, `roles_admin`, etc.):
    - Identifica la **Acción** (index, create, update, delete).
    - Identifica el **Módulo** basado en el nombre de la URL.
    - Verifica si el `current_role` del usuario tiene permiso para ese módulo.

### Roles del Sistema
- **ADMIN**: Acceso total a módulos administrativos.
- **CLIENTE**: Rol estándar de usuario.
- **PREMIUN**: Rol con privilegios extendidos (definir según negocio).

### Seeds (Datos Iniciales)
Para poblar la base de datos:

**Producción (Roles y Admin inicial)**:
```bash
python manage.py seed_prod
```

**Local (Datos de prueba)**:
```bash
python manage.py seed_local
```
