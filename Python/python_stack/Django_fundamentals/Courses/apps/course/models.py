from django.db import models
class QouteManager(models.Manager):
    def validate_info(self, postData):
        errors = {}
        if len(postData['name']) == 0:
            errors['course_name'] = 'Name cannot be Empty!'
        if len(postData['course_name']) < 3:
            errors['course_name'] = 'Name is too Short! Need to be Three Characters or More!'
        if len(postData['description_txt']) == 0:
            errors['description_txt'] = 'Description cannot be Empty!'
        if len(postData['description_txt']) < 10:
            errors['description_txt'] = 'Description is too Short! Need to be Ten Characters or More!'
        if len(errors):
            result = {
                'errors':errors
            }
            return result
        else:
            info = self.create(qoute_name = postData['name'], desc = postData['description_txt'])
            result = {
                'infos':info
            }
            return result
class Qoute(models.Model):
    qoute_name=models.CharField(max_length=255)
    desc=models.TextField()
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = QouteManager()