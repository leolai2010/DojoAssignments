from django.shortcuts import render, HttpResponse, redirect
def index(request):
    return render(request,'dojo_survey/index.html')
def process(request, method="POST"):
    request.session['namer'] = request.POST['firstname']
    request.session["locationz"] = request.POST['country']
    request.session["languagez"] = request.POST['language']
    request.session["commentz"] = request.POST['subject']
    return redirect("/result")
def result(request):
    return render(request, 'dojo_survey/result.html')