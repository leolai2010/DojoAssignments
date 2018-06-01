from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def main():
    return "Type /play in address line to play!"
@app.route('/play')
def index():
    return render_template("index.html")
@app.route("/play/<nums>")
def box(nums):
    return render_template("index2.html", times=int(nums))
@app.route("/play/<nums>/<color>")
def colorbox(nums,color):
    return render_template("index3.html", times=int(nums), bcolor=color)
app.run(debug=True)