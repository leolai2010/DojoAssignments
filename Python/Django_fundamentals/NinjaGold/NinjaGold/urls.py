from django.conf.urls import url, include  
urlpatterns = [
    url(r'^', include('apps.ninja_app.urls')) 
]