from django.db import models

class Imagez(models.Model):
    photo = models.ImageField(upload_to='images')
    output = models.TextField(default="image output")
    
    