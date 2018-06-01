from django.shortcuts import render, HttpResponse, redirect
items = {'1001':19.99,
         '1002':29.99,
         '1003':4.99,
         '1004':49.99}
def index(request):
    if 'total_items' not in request.session:
        request.session['total_items'] = 0
    if 'total_spent' not in request.session:
        request.session['total_spent'] = 0
    if 'purchase' not in request.session:
        request.session['purchase'] = 0
    return render(request, 'index.html')
def itemprocessing(request, method ="POST"):
    request.session['purchase'] = items[request.POST['product_id']] * int(request.POST['quantity'])
    request.session['total_items'] += int(request.POST['quantity'])
    request.session['total_spent'] += float(request.session['purchase'])
    return redirect('/checkout')
def checkout(request):
    return render(request, 'checkout.html')