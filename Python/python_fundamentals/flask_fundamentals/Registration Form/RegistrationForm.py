from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = "Chicken"
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/process', methods=['POST'])
def submit():
    errors = False
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        errors = True
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        errors = True
    if len(request.form['first_name']) < 1:
        flash("First Name cannot be blank!")
        errors = True
    if str.isalpha((request.form['first_name'])) == False:
        flash("First Name cannot have numbers!")
        errors = True
    if len(request.form['last_name']) < 1:
        flash("Last Name cannot be blank!")
        errors = True
    if str.isalpha((request.form['last_name'])) == False:
        flash("Last Name cannot have numbers!")
        errors = True
    if len(request.form['password']) < 1:
        flash("Password cannot be blank!")
        errors = True
    if len(request.form['password']) < 8:
        flash("Password is too short!")
        errors = True
    elif len(request.form['password_confirmation']) < 1:
        flash("Password Confirmation cannot be blank!")
        errors = True
    if request.form['password'] != request.form['password_confirmation']:
        flash("Passwords don't Match")
        errors = True
    if (errors == False):
        flash("Thanks for submitting your information.")
    return redirect('/')
if __name__=="__main__":
    app.run(debug=True)