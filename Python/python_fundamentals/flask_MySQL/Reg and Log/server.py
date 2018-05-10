from flask import Flask, render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL
app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = connectToMySQL('reg_and_log')
app.secret_key = "Chicken"
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/process', methods=['POST'])
def register():
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
    if len(request.form['password_confirmation']) < 1:
        flash("Password Confirmation cannot be blank!")
        errors = True
    if request.form['password'] != request.form['password_confirmation']:
        flash("Passwords don't Match")
        errors = True
    if (errors == False):
        query = "SELECT * FROM users WHERE email = %(email)s"
        data = {'email': request.form["email"]}
        result = mysql.query_db(query, data)
        if len(result) > 0:
            flash("That Email is already USED!")
            return redirect('/')
        else:
            flash("Thanks for submitting your information.")
            pw_hash = bcrypt.generate_password_hash(request.form['password'])
            query = "INSERT INTO users (email, first_name, last_name, password, created_at, updated_at) VALUES (%(email)s, %(first_name)s, %(last_name)s, %(password_hash)s, NOW(), NOW());"
            data = { "email" : request.form['email'],
                     "first_name" : request.form['first_name'],
                     "last_name" : request.form['last_name'],
                     "password_hash" : pw_hash }
            mysql.query_db(query, data)
            return redirect('/login')
    return redirect('/')
@app.route('/login', methods=['POST'])
def login():
    query = "SELECT * FROM users WHERE email = %(email)s"
    data = {'email': request.form["email"]}
    result = mysql.query_db(query, data)
    if result:
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
            session['email'] = result[0]['id']
            flash('SUCCESS! You are now Logged-In')
            return redirect('/')
    else:
        flash("No Email found! You could not be logged in")
    flash("Wrong Password")
    return redirect('/')
if __name__=="__main__":
    app.run(debug=True)