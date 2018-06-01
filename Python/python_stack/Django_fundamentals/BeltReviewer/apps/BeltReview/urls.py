from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^$', views.index),  
    url(r'^registration$', views.registration),
    url(r'^books$', views.books),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^books/add$', views.add),
]