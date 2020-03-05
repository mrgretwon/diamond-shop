from rest_framework import generics, views, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from core.models import Diamond, Cart
from core.serializers import DiamondSerializer, CartSerializer
from core.utils import send_email


class DiamondList(generics.ListCreateAPIView):
    queryset = Diamond.objects.all()
    serializer_class = DiamondSerializer


class CartView(views.APIView):
    model = Cart

    def get(self, request):
        cart = Cart.objects.first()
        serializer = CartSerializer(cart)

        return Response(serializer.data)

    def put(self, request):
        cart = Cart.objects.first()
        cart.updated = True
        new_cart_data = request.data
        serializer = CartSerializer(cart, data=new_cart_data)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Cart updated successfully"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def send_notification(request):
    send_email(request.data["email"])
    return Response({"message": "Email has been sent"})
