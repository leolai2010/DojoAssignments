from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^$', views.index),  
    url(r'^new$', views.new),  
    url(r'^create$', views.create), 
    url(r'^update$', views.update), 
    url(r'^(?P<number>\d+)/destroy$', views.destroy),
    url(r'^(?P<number>\d+)/show$', views.show), 
    url(r'^(?P<number>\d+)/edit$', views.edit),
]                           