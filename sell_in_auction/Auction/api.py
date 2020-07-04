from rest_framework import viewsets, permissions
from .serializers import AuctionItemsSerializer
from .models import AuctionItems


class AuctionItemsViewSet(viewsets.ModelViewSet):
    queryset = AuctionItems.objects.all()
    serializer_class = AuctionItemsSerializer
    permission_classes = [permissions.AllowAny]
