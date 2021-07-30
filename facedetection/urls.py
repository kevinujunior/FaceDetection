"""facedetection URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from django.contrib.auth import views as auth_views
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view
from social_login.views  import FacebookLogin, GithubLogin, GoogleLogin, LinkedinLogin

schema_view = get_swagger_view(title='FaceDetection API')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest_auth/', include('rest_auth.urls')),
    path('rest_auth/registration/', include('rest_auth.registration.urls')),
    path('allauth/', include('allauth.urls')),
    path('allauth/accounts', include('allauth.account.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path('social-auth/', include('social_django.urls', namespace="social")),
    path('documentation/', schema_view),
    path('images/', include('image_app.urls')),
    path('rest_auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest_auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('rest_auth/github/', GithubLogin.as_view(), name='github_login'),
    path('rest_auth/linkedin/', LinkedinLogin.as_view(), name='linkedin_login')
    
    
    # path('social_auth/', include('social_auth.urls'))
    
]
