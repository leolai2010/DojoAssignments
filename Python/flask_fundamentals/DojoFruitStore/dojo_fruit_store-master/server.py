from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    firstname = request.form['first_name']
    lastname = request.form['last_name']
    idnums = request.form['student_id']
    applel = request.form['apple']
    blackberryl = request.form['blackberry']
    strawberryl = request.form['strawberry']
    raspberryl = request.form['raspberry']
    print(request.form)
    return render_template("checkout.html", fnamer=firstname, lnamer=lastname, ider=idnums, aberry=applel,bberry=blackberryl,rberry=raspberryl,sberry=strawberryl)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    