from rest_framework import serializers
from .models import AuctionItems


class AuctionItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuctionItems
        fields = '__all__'