from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
def index(request):
    if 'number' not in request.session:
        request.session['number'] = 1
    context = {
        "unique_id": get_random_string(length=14)
    }
    return render(request,'rwg/index.html', context)
def generate(request):
    request.session['number'] +=1
    return redirect('/random_word_generator')
def reset(request):
    del request.session['number']
    return redirect('/random_word_generator')