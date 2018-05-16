from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def index(request):
    if 'newword' not in request.session:
        request.session['newword'] = []
    return render(request,'sessionwords/index.html')
def addingwords(request, method="POST"):
    if 'fontchange' not in request.POST:
        request.session['newword'].append({
            'addedword':request.POST['addword'],
            'time': strftime("%Y-%m-%d %H:%M %p", gmtime()),
            'colorize': request.POST['color'],
            'fontsize': 'medium'
            })
        print(request.session['newword'])
    else:
        request.session['newword'].append({
            'addedword':request.POST['addword'],
            'time': strftime("%Y-%m-%d %H:%M %p", gmtime()),
            'colorize': request.POST['color'],
            'fontsize': request.POST['fontchange']
            })
        print(request.session['newword'])
    request.session.modified = True
    return redirect("/sessionwords")
def clearingsession(request, method="POST"):
    if 'newword' in request.session:
        del request.session['newword']
        return redirect("/sessionwords")
    else:
        return redirect("/sessionwords") 
