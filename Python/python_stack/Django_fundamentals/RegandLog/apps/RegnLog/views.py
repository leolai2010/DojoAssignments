from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import bcrypt

def index(request):
    context = {'all_info': User.objects.all()}
    return render(request, 'index.html', context)
def registration(request):
    if request.method == "POST":
        result = User.objects.valdiate_info(request.POST)
        if 'errors' in result:
            for key,value in result['errors'].items():
                messages.error(request, value)
        else:
            messages.success(request, 'Registration Successful! Welcome!')
        return redirect('/')
    return redirect('/')
def login(request):
    if request.method == "POST":
        users_with_email = User.objects.filter(email = request.POST['user_email'])
        if len(users_with_email) > 0:
            print('user with the email exists! checking passswords now....')
            the_user = users_with_email.first()
            print('PW FROM DB:', the_user.password.encode('utf-8'))
            if bcrypt.checkpw(request.POST['password'].encode('utf-8'), the_user.password.encode('utf-8')):
                print('the passwords match! adding to session')
                request.session['user_id'] = the_user.id
                request.session['user_name'] = the_user.first_name
                messages.success(request, 'you have logged in, {}!'.format(request.session['user_name']))
                return redirect('/success')
            else:
                print('passwords do not match')
                messages.error(request, "invalid info")
                return redirect('/')
        else:
            messages.error(request, "invalid info, no users with that email")
            return redirect('/')
def success(request):
    context = {'all_info': User.objects.all()}
    return render(request, 'success.html', context)
