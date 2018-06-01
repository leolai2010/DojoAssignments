from django.db import models
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def valdiate_info(self, postData):
        errors = {}
        if len(postData['first_name']) == 0:
            errors["first_name"] = "First Name cannot be Empty!"
        elif len(postData['first_name']) < 2:
            errors["first_name"] = "First Name Too Short!"
        if len(postData['last_name']) == 0:
            errors["last_name"] = "Last Name cannot be Empty!"
        elif len(postData['last_name']) < 2:
            errors["last_name"] = "Last Name Too Short!"
        if len(postData['user_email']) == 0:
            errors["user_email"] = "Email cannot be Empty!"
        elif not EMAIL_REGEX.match(postData['user_email']):
            errors["user_email"] = "Email format incorrect"
        else:
            users_with_same_email = self.filter(email=postData['user_email'])
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
                first_name = postData['first_name'], 
                last_name = postData['last_name'], 
                email = postData['user_email'], 
                password = hashed_pw.decode('utf-8')
            )
            result = {
                'infos':info
            }
            return result
class User(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()