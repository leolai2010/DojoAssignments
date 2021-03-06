from __future__ import unicode_literals
from django.db import models
class User(models.Model):
    first=models.CharField(max_length=255)
    last=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    name=models.CharField(max_length=255)
    desc=models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    liked_users=models.ManyToManyField(User,related_name='liked_books')
    uploaded_by = models.ForeignKey(User,related_name='users',on_delete=models.CASCADE)