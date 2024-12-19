from flask import Flask, render_template
app = Flask(__name__)

@app. route('/')
def index():
    return render_template('flaskA2.html')

@app. route('/display-name/<name>/<path:age>')
def indexName(name,age):    
    return render_template('displayName.html', name1 = name, age = age)


@app. route('/display-food/<food>/<drink>')
def indexFood(food,drink):
    return render_template('food.html', food = food,drink = drink)

@app. route('/display-vacation/<vacation>')
def indexVacation(vacation):
    return render_template('vacation.html', vacation = vacation)



if __name__ == '__main__':
    app.run(debug=True, port = 5000)