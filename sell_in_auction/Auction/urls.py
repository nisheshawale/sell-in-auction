from rest_framework import routers
from django.urls import path, include
from .api import AuctionItemsViewSet, AuctionItemsViewSetAll


router = routers.DefaultRouter()
router.register('api/auction/all', AuctionItemsViewSetAll)
router.register('api/auction', AuctionItemsViewSet, basename="items")


urlpatterns = [
    path('', include(router.urls)),
    # path('api/auction/filter', AuctionItemsListView.as_view())
]
