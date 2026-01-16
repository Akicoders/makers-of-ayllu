from django.shortcuts import redirect
from django.urls import resolve

def role_module_permission_middleware(get_response):
    """
    Middleware que valida permisos basados en roles y acciones CRUD
    """
    
    # Rutas públicas que no requieren autenticación ni permisos
    PUBLIC_ROUTES = [
        
        # Auth Routes
        'index',
        'login',
        'register',
        'check_email',
        'verify_code',
        'resend_code',
        'login_2fa',
        'verify_2fa',
        'resend_2fa',
    ]
    
    # Rutas accesibles para usuarios autenticados sin restricción de rol
    AUTHENTICATED_ROUTES = [        
        # Profile & Dashboard
        'dashboard',
        'profile_index',
        'profile_update',
        'profile_change_password',
        'profile_delete_account',
        'logout',
    ]
    
    # Módulos accesibles por todos los usuarios autenticados
    GLOBAL_MODULES = {
        "dashboard", "profile"
    }
    
    # Mapeo de acciones a permisos
    ACTION_MAP = {
        "index": "can_read",
        "show": "can_read",
        "store": "can_create",
        "create": "can_create",
        "update": "can_update",
        "edit": "can_update",
        "destroy": "can_delete",
        "delete": "can_delete",
    }
    
    # Roles permitidos por módulo (solo para rutas restringidas)
    MODULE_ROLES = {
        "users_admin": ["ADMIN"],
        "roles_admin": ["ADMIN"],
        "customers_seller": ["ADMIN"], # Restricted to ADMIN as per safety default. Can add CLIENTE if needed later.
    }

    def middleware(request):
        # Resolver la ruta actual
        try:
            resolver_match = resolve(request.path)
        except Exception:
            return get_response(request)
            
        if not resolver_match:
            return get_response(request)

        view_name = resolver_match.url_name
        if not view_name:
            return get_response(request)

        # Permitir acceso a rutas públicas sin restricciones
        if view_name in PUBLIC_ROUTES:
            return get_response(request)

        # Si no está autenticado y no es ruta pública, redirigir a login o dejar que AuthMiddleware maneje
        if not request.user.is_authenticated:
            # Si quiere acceder a una ruta protegida y no está logueado, usualmente el login_required lo maneja
            # Pero podemos forzarlo aquí si queremos
            return get_response(request)

        # Permitir acceso a rutas autenticadas sin verificar rol
        if view_name in AUTHENTICATED_ROUTES:
            return get_response(request)

        # Separar el nombre de la vista: "users_admin_show" → ["users", "admin", "show"]
        # Estrategia: Buscar la acción al final
        parts = view_name.split("_")

        # Identificar la acción (create, index, update, etc.)
        action = None
        # Recorremos en reverso para encontrar la última coincidencia con una acción conocida
        for part in reversed(parts):
            if part in ACTION_MAP:
                action = part
                break

        # Si no hay acción reconocida, permitir (puede ser una ruta personalizada - fallback seguro o inseguro?)
        # Referencia dice "permitir".
        if not action:
            return get_response(request)

        # Extraer el nombre del módulo
        # module_name será todo lo que está antes de la acción.
        # Ejemplo: "users_admin_show" -> action="show", module="users_admin"
        try:
            action_index = len(parts) - 1 - parts[::-1].index(action) # Find last index of action
            module_parts = parts[:action_index]
            module_name = "_".join(module_parts)
        except ValueError:
             return get_response(request)

        if not module_name:
            return get_response(request)

        # Si es un módulo global, permitir acceso
        if module_name in GLOBAL_MODULES:
            return get_response(request)

        # Obtener el rol del usuario
        user_role = getattr(request.user, "current_role", None)
        
        # Superusuarios tienen acceso total
        if request.user.is_superuser:
            return get_response(request)
        
        # Si no tiene rol asignado, redirigir al dashboard
        if not user_role:
            return redirect("dashboard")

        # Verificar si el rol tiene acceso al módulo
        allowed_roles = MODULE_ROLES.get(module_name, [])
        if user_role.name not in allowed_roles:
             # Opcional: Loggear intento de acceso no autorizado
            return redirect("dashboard")

        return get_response(request)

    return middleware
