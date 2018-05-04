from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def main():
    return "Table will be created based on input /users"
@app.route('/users')
def studenttab():
    students = [
        {"first_name":  'Michael', "last_name" : 'Jordan'}, 
        {"first_name" : 'John', "last_name" : 'Rosales'}, 
        {"first_name" : 'Mark', "last_name" : 'Guillen'}, 
        {"first_name" : 'KB', "last_name" : 'Tonel'}]
    return render_template("index.html", sarr=students)
app.run(debug=True)