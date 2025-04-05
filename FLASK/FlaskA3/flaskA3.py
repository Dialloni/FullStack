from flask import Flask, render_template
app = Flask(__name__)

@app.route('/part1/<first_name>/<last_name>/<favorite_food>/<favorite_vacation>')
def partOne(first_name, last_name, favorite_food, favorite_vacation):    
    return render_template('part1.html', first_name=first_name, last_name=last_name, favorite_food=favorite_food, favorite_vacation=favorite_vacation)

@app.route('/part2')
def partTwo():
    looper = range(1, 11)
    return render_template('part2.html', looper=looper)

if __name__ == '__main__':
    app.run(debug=True, port=5000)