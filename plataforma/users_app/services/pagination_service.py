from django.core.paginator import Paginator


class PaginationService:

    @staticmethod
    def paginate_queryset(queryset, page=1, per_page=10):
        """
        Retorna un diccionario con datos de paginación listos para enviar al frontend.
        """
        paginator = Paginator(queryset, per_page)
        page_obj = paginator.get_page(page)

        return {
            "data": list(page_obj.object_list),
            "total": paginator.count,
            "per_page": per_page,
            "current_page": page_obj.number,
            "from": page_obj.start_index(),
            "to": page_obj.end_index(),
        }
