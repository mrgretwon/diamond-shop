from django.contrib import admin
from core.models import Diamond, Cart


def clear_cart(modeladmin, request, queryset):
    queryset.update(data=[])


clear_cart.short_description = "Clear Cart data"


class CartAdmin(admin.ModelAdmin):
    list_display = ['data', 'updated']
    ordering = ['updated']
    actions = [clear_cart]


admin.site.register(Cart, CartAdmin)
admin.site.register(Diamond)
