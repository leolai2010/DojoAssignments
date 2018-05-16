from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'chicken'
app.count = 0
@app.route('/')
def index():
    session['counter'] = app.count
    app.count += 1
    return render_template("index.html", counts=app.count)
@app.route('/increase', methods=['POST'])
def plustwo():
    app.count = app.count + 1
    return redirect('/')
@app.route('/reset', methods=['POST'])
def resetto():
    app.count = 0
    return redirect('/')
@app.route('/destroy_session')
def destroy():
    app.count = 0 
    clear.session
    return redirect('/')
if __name__=="__main__":
    app.run(debug=True) 
