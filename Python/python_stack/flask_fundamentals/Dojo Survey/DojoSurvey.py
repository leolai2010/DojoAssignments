from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/result', methods=['POST'])
def subinfo():
    firstname = request.form['firstname']
    countryname = request.form['country']
    languagename = request.form['language']
    commentname = request.form['subject']
    return render_template("result.html", namer=firstname, locationz=countryname, languagez=languagename, commentz=commentname)
if __name__=="__main__":
    app.run(debug=True) 
