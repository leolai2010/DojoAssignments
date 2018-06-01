from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User
def index(request):
    context = {'all_info': User.objects.all()}
    return render(request, 'index.html', context)
def new(request):
    return render(request, 'new.html')
def edit(request, number):
    user= User.objects.get(id=number)
    context = { 'user_info':user}
    return render(request, 'edit.html', context)
def show(request, number):
    user= User.objects.get(id=number)
    context = { 'user_info':user}
    return render(request, 'show.html', context)
def create(request):
    if request.method =='POST':
        errorms = User.objects.valdiate_info(request.POST)
        if 'errors' in errorms:
            for key,value in errorms['errors'].items():
                messages.error(request, value)
            return redirect('/users/new')
        else:
            messages.success(request, "User successfully created")
            return redirect('/users')
def destroy(request,number):
    deleter = User.objects.get(id=number)
    deleter.delete()
    return redirect('/users')
def update(request):
    if request.method == 'POST':
        changer = User.objects.get(id=request.POST['id'])
        changer.first = request.POST['first_name']
        changer.last = request.POST['last_name']
        changer.email = request.POST['user_email']
        changer.save()
        return redirect('/users')