from rest_framework import serializers

from conf import settings
from core.models import Diamond, Cart


class DiamondSerializer(serializers.ModelSerializer):
    shape = serializers.SerializerMethodField()

    class Meta:
        model = Diamond
        fields = ['id', 'type', 'shape']

    def get_shape(self, obj):
        if settings.DEBUG:
            return 'http://localhost:8000' + obj.shape.url
        else:
            return obj.shape.url


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'data']
