from django.urls import path

from users_app.views import (
    auth_views,
    users_admin_views,
    roles_admin_views,
    customers_seller_views,
    profile_views,
)

urlpatterns = [
    # Auth routes
    path("", auth_views.index, name="index"),
    path("login/", auth_views.login_view, name="login"),
    path("logout/", auth_views.logout_view, name="logout"),
    path("register/", auth_views.register_view, name="register"),
    path("dashboard/", auth_views.dashboard_view, name="dashboard"),
    
    # Email verification routes - NUEVAS RUTAS AÑADIDAS
    path("check-email/", auth_views.check_email_view, name="check_email"),
    path("verify-code/", auth_views.verify_code_view, name="verify_code"),
    path("resend-code/", auth_views.resend_code_view, name="resend_code"),

    # Nuevas rutas 2FA
    path('login-2fa/', auth_views.login_2fa_view, name='login_2fa'),
    path('verify-2fa/', auth_views.verify_2fa_view, name='verify_2fa'),
    path('resend-2fa/', auth_views.resend_2fa_view, name='resend_2fa'),
    
    # rutas de gestion usuarios admin
    path("administrador/usuarios/", users_admin_views.users_admin_index_view, name="users_admin_index"),
    path(
        "administrador/usuarios/store/",
        users_admin_views.users_admin_store_view,
        name="users_admin_store",
    ),
    path(
        "administrador/usuarios/show/<uuid:user_id>/",
        users_admin_views.users_admin_show_view,
        name="users_admin_show",
    ),
    path(
        "administrador/usuarios/update/",
        users_admin_views.users_admin_update_view,
        name="users_admin_update",
    ),
    path(
        "administrador/usuarios/services/update/",
        users_admin_views.user_admin_update_services_view_view,
        name="user_admin_update_services",
    ),
    path(
        "administrador/usuarios/destroy/",
        users_admin_views.users_admin_destroy_view,
        name="users_admin_destroy",
    ),
    # rutas de crear roles admin
    path("administrador/roles/", roles_admin_views.roles_admin_index_view, name="roles_admin_index"),
    path(
        "administrador/roles/store/", roles_admin_views.roles_admin_store_view, name="roles_admin_store"
    ),
    path(
        "administrador/roles/show/<uuid:role_id>/",
        roles_admin_views.roles_admin_show_view,
        name="roles_admin_show",
    ),
    path(
        "administrador/roles/update/",
        roles_admin_views.roles_admin_update_view,
        name="roles_admin_update",
    ),
    path(
        "administrador/roles/destroy/",
        roles_admin_views.roles_admin_destroy_view,
        name="roles_admin_destroy",
    ),
    # rutas de gestion clientes sellers
    path(
        "vendedor/clientes/",
        customers_seller_views.customers_seller_index_view,
        name="customers_seller_index",
    ),
    path(
        "vendedor/clientes/store/",
        customers_seller_views.customers_seller_store_view,
        name="customers_seller_store",
    ),
    path(
        "vendedor/clientes/show/<uuid:user_id>/",
        customers_seller_views.customers_seller_show_view,
        name="customers_seller_show",
    ),
    path(
        "vendedor/clientes/update/",
        customers_seller_views.customers_seller_update_view,
        name="customers_seller_update",
    ),
    path(
        "vendedor/clientes/destroy/",
        customers_seller_views.customers_seller_destroy_view,
        name="customers_seller_destroy",
    ),
    # rutas para el perfil
    path("perfil/", profile_views.profile_index_view, name="profile_index"),
    path("perfil/update/", profile_views.profile_update_view, name="profile_update"),
    path(
        "perfil/change-password/",
        profile_views.profile_change_password_view,
        name="profile_change_password",
    ),
    path(
        "perfil/delete-account/",
        profile_views.profile_delete_account_view,
        name="profile_delete_account",
    ),
]