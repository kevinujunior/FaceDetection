from image_app.models import Imagez
from rest_framework import routers, urlpatterns
from .views import ImageViewSet
from django.urls import path , include


router = routers.DefaultRouter()

router.register('',ImageViewSet, basename = "images")

urlpatterns = [
    path("", include(router.urls)),
]