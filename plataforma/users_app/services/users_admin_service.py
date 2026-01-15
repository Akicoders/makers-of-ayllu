from django.db.models import Q
from users_app.services.pagination_service import PaginationService
from users_app.forms.users_update_form import UserUpdateForm
from users_app.forms.users_form import UserForm
from users_app.models import User, Role
from django.core.exceptions import ValidationError


class UsersAdminService:

    @staticmethod
    def create_user(data):
        form = UserForm(data)
        if not form.is_valid():
            raise ValidationError(form.errors)
        return form.save()

    @staticmethod
    def update_user(user_id, data):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise ValidationError({"id": ["Usuario no encontrado."]})

        if not data.get("password"):
            data.pop("password", None)

        form = UserUpdateForm(data, instance=user, user_id=user.id)
        if not form.is_valid():
            raise ValidationError(form.errors)

        return form.save()

    @staticmethod
    def delete_user(user_id):
        try:
            user = User.objects.get(id=user_id)
            user.delete()
        except User.DoesNotExist:
            raise ValidationError({"id": ["Usuario no encontrado."]})

    @staticmethod
    def get_user_data(user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise ValidationError({"id": ["Usuario no encontrado."]})

        return {
            "id": str(user.id),
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "username": user.username,
            "credits": user.credits,
            "phone_number": user.phone_number,
            "estado": user.estado,
            "is_superuser": user.is_superuser,
            "current_rank": str(user.current_rank.id) if user.current_rank else None,
            "current_role": (
                str(user.current_role.id_rol) if user.current_role else None
            )
        }

    @staticmethod
    def get_users_for_frontend(params):
        page = int(params.get("page", 1))
        per_page = int(params.get("per_page", 10))
        search = params.get("search", "")
        sort_by = params.get("sort_by", "id")
        sort_direction = params.get("sort_direction", "asc")
        estado = params.get("status", "")

        qs = User.objects.all()
        if search:
            qs = qs.filter(
                Q(first_name__icontains=search)
                | Q(last_name__icontains=search)
                | Q(email__icontains=search)
            )
        if estado:
            qs = qs.filter(estado=estado)

        allowed_sort_fields = ["id", "first_name", "email", "estado"]
        if sort_by not in allowed_sort_fields:
            sort_by = "id"
        order = f"{'-' if sort_direction == 'desc' else ''}{sort_by}"
        qs = qs.order_by(order)

        paginated = PaginationService.paginate_queryset(qs, page, per_page)

        paginated["data"] = [
            {
                "id": str(u.id),
                "name": f"{u.first_name} {u.last_name}",
                "email": u.email,
                "role": u.current_role.name if u.current_role else "Sin rol",
                "rank": u.current_rank.name if u.current_rank else "Sin rango",
                "estado": u.estado,
                "credits": u.credits,
            }
            for u in paginated["data"]
        ]

        paginated["filters"] = {
            "search": search,
            "per_page": per_page,
            "sort_by": sort_by,
            "sort_direction": sort_direction,
            "estado": estado,
        }

        return paginated

    @staticmethod
    def get_roles_and_ranks():
        roles = [{"id": str(r.id_rol), "name": r.name} for r in Role.objects.all()]
        return {"roles": roles}
