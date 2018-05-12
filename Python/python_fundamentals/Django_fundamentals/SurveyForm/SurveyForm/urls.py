from django.conf.urls import url, include 

urlpatterns = [
    url(r'^', include('apps.dojo_survey.urls')),
    url(r'^sessionwords/', include('apps.sessionwords.urls')),
]