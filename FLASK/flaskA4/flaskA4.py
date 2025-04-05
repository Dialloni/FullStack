from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        user_data = {
            'fname': request.form['fname'],
            'lname': request.form['lname'],
            'email': request.form['email'],
            'state': request.form['state'],
            'city': request.form['city'],
            'zipcode': request.form['zipcode']
        }
        return render_template('displayData.html', user_data=user_data)
    
    else:
        return render_template('index.html', user_data=None)

if __name__ == '__main__':
    app.run(debug=True)