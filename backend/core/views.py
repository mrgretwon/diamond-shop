from rest_framework import generics, views
from rest_framework.response import Response

from core.models import Diamond, Cart
from core.serializers import DiamondSerializer, CartSerializer


class DiamondList(generics.ListCreateAPIView):
    queryset = Diamond.objects.all()
    serializer_class = DiamondSerializer


class CartView(views.APIView):
    model = Cart
    serializer_class = CartSerializer
    queryset = Cart.objects.all()

    # def get(self, request, *args, **kwargs):
    #     response = []
    #
    #     return Response(data=response)
