from django.shortcuts import render, HttpResponse, redirect
  # the index function is called when root is visited
# def index(request):
#     response = "placeholder to later display all the list of blogs"
#     return HttpResponse(response)
def new(request):
    new = "placeholder to display a new form to create a new blog"
    return HttpResponse(new)
def create(request):
    return redirect('/')
def show(request, number):
    show = "placeholder to display blog" + (number)
    return HttpResponse(show)
def edit(request, number):
    edit = "placeholder to edit blog" + (number)
    return HttpResponse(edit)
def destroy(request, number):
    return redirect('/')
def index(request):
    context = {
        "email" : "blog@gmail.com",
        "name" : "mike"
    }
    return render(request, "blogs_app/index.html", context)
def creates(request):
    if request.method == "POST":
        print("*"*50)
        print(request.POST)
        print(request.POST['name'])
        print(request.POST['desc'])
        request.session['name'] = "test"  # more on session below
        print("*"*50)
        return redirect("/")
    else:
        return redirect("/")