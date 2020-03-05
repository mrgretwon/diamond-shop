from rest_framework import serializers

from core.models import Diamond, Cart


class DiamondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diamond
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'data']
