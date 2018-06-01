from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def valdiate_info(self, postData):
        errors = {}
        if len(postData['first_name']) == 0:
            errors["first_name"] = "First Name cannot be Empty!"
        if len(postData['last_name']) == 0:
            errors["last_name"] = "Last Name cannot be Empty!"
        if len(postData['user_email']) == 0:
            errors["user_email"] = "Email cannot be Empty!"
        elif not EMAIL_REGEX.match(postData['user_email']):
            errors["user_email"] = "Email format incorrect"
        if len(errors):
            result = {
                'errors':errors
            }
            return result
        else:
            info = self.create(first = postData['first_name'], last = postData['last_name'], email = postData['user_email'])
            result = {
                'infos':info
            }
            return result
class User(models.Model):
    first=models.CharField(max_length=255)
    last=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()