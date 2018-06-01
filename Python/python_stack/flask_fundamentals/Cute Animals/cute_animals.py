from flask import Flask, render_template, redirect
app = Flask(__name__)
from random import shuffle
@app.route('/')
def main():
    return render_template("index.html")
@app.route('/<nums>')
def animals(nums):
    return render_template("index2.html", animalsbox=int(nums))
@app.route('/danger')
def dangerous():
    print("Dangerous! Going Back!")
    return redirect('/')
@app.route('/random/<names>')
def randomanimals(names):
    shuffled_images = shuffle_list(int(names))
    return render_template("index3.html", images=shuffled_images)
def shuffle_list(max):
    list = []
    for y in range(10):
        list.append(y+1)
    shuffle(list)
    return list
if __name__=="__main__":
    app.run(debug=True)