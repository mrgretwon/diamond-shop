from rest_framework import serializers

from core.models import Diamond, Cart


class DiamondSerializer(serializers.ModelSerializer):
    shape = serializers.SerializerMethodField()

    class Meta:
        model = Diamond
        fields = ['id', 'type', 'shape']

    def get_shape(self, obj):
        return obj.shape.url


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'data']
