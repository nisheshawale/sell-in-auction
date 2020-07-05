from rest_framework import viewsets, permissions
from .serializers import AuctionItemsSerializer
from .models import AuctionItems

#from rest_framework.parsers import MultiPartParser, FormParser


class AuctionItemsViewSet(viewsets.ModelViewSet):
    #parser_classes = (MultiPartParser, FormParser)

    queryset = AuctionItems.objects.all()
    serializer_class = AuctionItemsSerializer
    permission_classes = [permissions.AllowAny]
