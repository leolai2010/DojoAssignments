from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Course
def index(request):
    context={'all_info': Course.objects.all()}
    return render(request, 'index.html', context)
def addfunction(request):
    if request.method == 'POST':
        errorms = Course.objects.validate_info(request.POST)
        if 'errors' in errorms:
            for key,value in errorms['errors'].items():
                messages.error(request,value)
            return redirect('/')
        else:
            messages.success(request, "Course has been successfully added!")
            return redirect('/')
    return redirect(request, '/')
def destroy(request,number):
    delcourse= Course.objects.get(id=number)
    context = { 'coursedeletion':delcourse}
    return render(request, 'destroy.html', context)
def destroyer(request):
    deleter = Course.objects.get(id=request.POST['id'])
    deleter.delete()
    return redirect('/')