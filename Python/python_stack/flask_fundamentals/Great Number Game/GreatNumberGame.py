from flask import Flask, render_template, request, redirect, session, flash
import random
app = Flask(__name__)
app.secret_key = 'chicken'
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/guess',methods=['POST'])
def guessing():
    if 'correctnum' not in session:
        session["correctnum"] = int(random.randrange(0,101))
    numberentered = int(request.form['number'])
    print(session["correctnum"])
    if session["correctnum"] == numberentered:
        flash("Correct!")
        session.pop("correctnum")
        return redirect('/')
    if session["correctnum"] < numberentered:
        flash("Wrong! Try a Lower Number")
        return redirect('/')
    if session["correctnum"] > numberentered:
        flash("Wrong! Try a Higher Number")
        return redirect('/')
if __name__ =="__main__":
    app.run(debug=True)