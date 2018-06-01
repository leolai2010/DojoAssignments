from django.db import models
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def valdiate_info(self, postData):
        errors = {}
        if len(postData['name']) == 0:
            errors["name"] = "Name cannot be Empty!"
        elif len(postData['name']) < 2:
            errors["name"] = "Name Too Short!"
        if len(postData['email']) == 0:
            errors["email"] = "Email cannot be Empty!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Email format incorrect"
        else:
            users_with_same_email = self.filter(email=postData['email'])
            if len(users_with_same_email)>0:
                errors['email'] = 'Email is already taken'
        if len(postData['password']) == 0:
            errors["password"] = "Password cannot be Empty!"
        elif len(postData['password']) < 8:
            errors["password"] = "Password Too Short!"
        if len(postData['password_conf']) == 0:
            errors["password_conf"] = "Password Confirmation cannot be Empty!"
        elif postData['password'] != postData['password_conf']:
            errors['password'] = 'Password fields must match'
        if len(errors):
            result = {
                'errors':errors 
            }
            return result
        else:
            hashed_pw = bcrypt.hashpw(postData['password'].encode('utf-8'), bcrypt.gensalt())
            info = self.create(
                name = postData['name'], 
                alias = postData['alias'], 
                email = postData['email'], 
                password = hashed_pw.decode('utf-8')
            )
            result = {
                'infos':info
            }
            return result
class User(models.Model):
    name=models.CharField(max_length=255)
    alias=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()



class Book(models.Model):
    title=models.CharField(max_length=255)
    author=models.CharField(max_length=255)
    review=models.TextField()
    rating=models.IntegerField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()