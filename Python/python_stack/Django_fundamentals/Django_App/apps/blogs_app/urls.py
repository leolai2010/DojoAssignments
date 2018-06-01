from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^new/$', views.new),
    url(r'^creat/$', views.create),
    url(r'^(?P<number>\d+)$', views.show),
    url(r'^edit/(?P<number>\d+)$', views.edit),
    url(r'^delete/(?P<number>\d+)$', views.destroy),
    url(r'^creates$', views.creates)
]                            # anticipation of all the routes that will be coming soon
