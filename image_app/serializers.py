from .models import Imagez
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagez
        fields = ['id','photo']
        

class OutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagez
        fields = ['id','output']