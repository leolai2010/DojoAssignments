from django.shortcuts import render, HttpResponse, redirect
def index(request):
    return render(request,'sessionwords/index.html')
def addingwords(request, method="POST"):
    request.session['addedword'] = request.POST['addword']
    # temp_list = request.session['addword']
    # temp_list.append({"word":'addword','color':'color'})
    # request.session['addword'] = temp_list
    return render(request, 'sessionwords/index.html')
def clearingsession(request, method="POST"):
    if 'addedword' in request.session:
        del request.session['addedword']
        return redirect("/sessionwords")
    else:
        return redirect("/sessionwords")