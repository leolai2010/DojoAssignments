from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"
@app.route('/dojo')
def success():
    return "Dojo!"
@app.route('/say/<name>')
def hello(name):
    print(name)
    return "Hi " +name+ " !"
@app.route('/repeat/<nums>/<id>') 
def repeating(nums, id):
    return id*int(nums)
app.run(debug=True)