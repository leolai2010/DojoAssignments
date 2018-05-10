from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = "chicken"
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/result', methods=['POST'])
def subinfo():
    if len(request.form['firstname']) < 1:
        flash("Name cannot be blank!")
        return redirect('/')
    if len(request.form['subject']) < 1:
        flash("Comment cannot be blank!")
        return redirect('/')
    if len(request.form['subject']) > 120:
        flash("Comment is too long! Make less than 120 Characters")
        return redirect('/')
    firstname = request.form['firstname']
    countryname = request.form['country']
    languagename = request.form['language']
    commentname = request.form['subject']
    return render_template("result.html", namer=firstname, locationz=countryname, languagez=languagename, commentz=commentname)
@app.route('/reset', methods=['POST'])
def reset():
    return redirect('/')
if __name__=="__main__":
    app.run(debug=True) 
