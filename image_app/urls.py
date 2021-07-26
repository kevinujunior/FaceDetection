from image_app.models import Imagez
from rest_framework import routers, urlpatterns
from .views import  OuptutViewSet , ImageViewSet
from django.urls import path , include


router = routers.DefaultRouter()

router.register('images',ImageViewSet, basename = "images")
router.register('output',OuptutViewSet, basename = "output")

urlpatterns = [
    path("", include(router.urls)),
]