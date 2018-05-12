from django.conf.urls import url
from . import views       
urlpatterns = [
    url(r'^$', views.index),
    url(r'^addingwords$', views.addingwords),
    url(r'^clearsession$', views.clearingsession),
]                        