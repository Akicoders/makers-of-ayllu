from django.core.exceptions import ValidationError
from users_app.models import Role
from users_app.forms.role_form import RoleForm
from users_app.forms.role_update_form import RoleUpdateForm
from users_app.services.pagination_service import PaginationService
from django.db.models import Q


class RolesService:
    @staticmethod
    def create_role(data):
        form = RoleForm(data)
        if not form.is_valid():
            raise ValidationError(form.errors)
        return form.save()

    @staticmethod
    def update_role(role_id, data):
        try:
            role = Role.objects.get(id_rol=role_id)
        except Role.DoesNotExist:
            raise ValidationError({"id": ["Rol no encontrado."]})

        form = RoleUpdateForm(data, instance=role, role_id=role.id_rol)
        if not form.is_valid():
            raise ValidationError(form.errors)
        return form.save()

    @staticmethod
    def delete_role(role_id):
        try:
            role = Role.objects.get(id_rol=role_id)
            role.delete()
        except Role.DoesNotExist:
            raise ValidationError({"id": ["Rol no encontrado."]})

    @staticmethod
    def get_role_data(role_id):
        try:
            role = Role.objects.get(id_rol=role_id)
        except Role.DoesNotExist:
            raise ValidationError({"id": ["Rol no encontrado."]})

        return {
            "id": str(role.id_rol),
            "name": role.name,
        }

    @staticmethod
    def get_roles(params):
        page = int(params.get("page", 1))
        per_page = int(params.get("per_page", 10))
        search = params.get("search", "")
        sort_by = params.get("sort_by", "id")
        sort_direction = params.get("sort_direction", "asc")

        qs = Role.objects.all()
        if search:
            qs = qs.filter(Q(name__icontains=search))

        allowed_sort_fields = {
            "id": "id_rol",
            "name": "name",
        }

        sort_field = allowed_sort_fields.get(sort_by, "id_rol")
        order = f"{'-' if sort_direction == 'desc' else ''}{sort_field}"
        qs = qs.order_by(order)

        paginated = PaginationService.paginate_queryset(qs, page, per_page)

        paginated["data"] = [
            {
                "id": r.id_rol,
                "name": r.name,
            }
            for r in paginated["data"]
        ]

        paginated["filters"] = {
            "search": search,
            "per_page": per_page,
            "sort_by": sort_by,
            "sort_direction": sort_direction,
        }

        return paginated
