from django.core.exceptions import ValidationError
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from users_app.services.customers_seller_service import CustomerSellerService
from config.utils import create_decrypted_data
from users_app.models import User
from inertia import InertiaResponse
from django.shortcuts import redirect


@login_required(login_url="/")
def customers_seller_index_view(request):
    users_data = CustomerSellerService.get_customers_for_frontend(request.GET)
    ranks = CustomerSellerService.get_ranks()
    return InertiaResponse(
        request,
        component="Seller/Customers/Index",
        props={
            "customers": users_data,
            "estado_choices": User.ESTADO_CHOICES,
            "ranks": ranks,
            "customer": request.session.pop("customer", None),
        },
    )


@login_required(login_url="/")
def customers_seller_show_view(request, user_id):
    try:
        user_data = CustomerSellerService.get_customer_data(user_id)
    except ValidationError:
        return redirect("customers_seller_index")

    request.session["customer"] = user_data
    return redirect(request.META.get("HTTP_REFERER", "customers_seller_index"))


@login_required(login_url="/")
@require_POST
def customers_seller_store_view(request):
    data = create_decrypted_data(request)
    try:
        CustomerSellerService.create_customer(data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "customers_seller_index"))


@login_required(login_url="/")
@require_POST
def customers_seller_update_view(request):
    data = create_decrypted_data(request)
    user_id = data.get("id")
    try:
        CustomerSellerService.update_customer(user_id, data)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "customers_seller_index"))


@login_required(login_url="/")
@require_POST
def customers_seller_destroy_view(request):
    data = create_decrypted_data(request)
    user_id = data.get("id")
    try:
        CustomerSellerService.delete_customer(user_id)
    except ValidationError as e:
        request.session["errors"] = e.message_dict
    return redirect(request.META.get("HTTP_REFERER", "customers_seller_index"))


