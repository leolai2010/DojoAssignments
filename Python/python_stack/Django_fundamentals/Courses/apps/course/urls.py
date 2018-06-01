from django.conf.urls import url
from . import views          
urlpatterns = [
    url(r'^$', views.index),  
    url(r'^addfunction$', views.addfunction),
    url(r'^destroyer$', views.destroyer),
    url(r'^(?P<number>\d+)/destroy$', views.destroy),
]                          