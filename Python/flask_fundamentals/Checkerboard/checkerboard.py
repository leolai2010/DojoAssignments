from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def main():
    return "Create a checkerboard by specify the size in the address line /x/y"
@app.route('/<x>/<y>')
def index(x,y):
    return render_template("index.html", horz=int(x),very=int(y))
app.run(debug=True)