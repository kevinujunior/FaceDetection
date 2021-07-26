from django.shortcuts import render

from .models import Imagez
from .serializers import ImageSerializer, OutputSerializer
from rest_framework import viewsets


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Imagez.objects.all()
    
    
class OuptutViewSet(viewsets.ModelViewSet):
    serializer_class = OutputSerializer
    queryset = Imagez.objects.all()
    