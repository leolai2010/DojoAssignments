from django.conf.urls import url, include
urlpatterns = [
    url(r'^users/', include('apps.REST.urls'))
]