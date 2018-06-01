from django.conf.urls import url, include
urlpatterns = [
    url(r'^', include('apps.user_login.urls')),
    url(r'^dojo_ninjas', include('apps.dojo_ninjas.urls')),
    url(r'^book_authors', include('apps.book_authors.urls')),
    url(r'^likes_books', include('apps.book_authors.urls')) 
]