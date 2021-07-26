from django.shortcuts import render

from .models import Imagez
from .serializers import ImageSerializer
from rest_framework import viewsets


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    
    def get_queryset(self):
        images = Imagez.objects.all()
        return images