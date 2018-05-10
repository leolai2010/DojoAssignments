from flask import Flask, redirect, request, render_template, flash
from mysqlconnection import connectToMySQL
app = Flask(__name__)
mysql = connectToMySQL('emailv')
app.secret_key = "Chicken"
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/login', methods=['POST'])
def login():
    query = "SELECT * FROM user_emails WHERE email = %(email)s;"
    data = { "email" : request.form["email"] }
    result = mysql.query_db(query, data)
    if len(result) > 0:
        flash("That Email is already in DB!")
        return redirect('/')
    else:
        query = "INSERT INTO user_emails (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW());"
        data = { 'email': request.form['email'] }
        mysql.query_db(query, data)
        return redirect('result')
@app.route('/result')
def result():
    all_emails = mysql.query_db("SELECT * FROM user_emails")
    return render_template('result.html', emails = all_emails)
if __name__=="__main__":
    app.run(debug=True)