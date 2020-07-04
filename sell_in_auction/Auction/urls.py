from rest_framework import routers
from .api import AuctionItemsViewSet

router = routers.DefaultRouter()
router.register('api/auction', AuctionItemsViewSet)

urlpatterns = router.urls
