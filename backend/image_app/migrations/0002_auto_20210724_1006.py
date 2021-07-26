# Generated by Django 3.2.5 on 2021-07-24 04:36

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('image_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='photo',
        ),
        migrations.AddField(
            model_name='image',
            name='name',
            field=models.CharField(default=django.utils.timezone.now, max_length=250),
            preserve_default=False,
        ),
    ]