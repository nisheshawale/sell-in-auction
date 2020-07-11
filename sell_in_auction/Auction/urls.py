from rest_framework import routers
from .api import AuctionItemsViewSet, AuctionItemsViewSetAll

router = routers.DefaultRouter()
router.register('api/auction/all', AuctionItemsViewSetAll)
router.register('api/auction', AuctionItemsViewSet, basename="items")


urlpatterns = router.urls
