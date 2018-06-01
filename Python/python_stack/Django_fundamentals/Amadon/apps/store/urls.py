from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^$', views.index),  
    url(r'^itemprocessing$', views.itemprocessing),
    url(r'^checkout$', views.checkout),
]      