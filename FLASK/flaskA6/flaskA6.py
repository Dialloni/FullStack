from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def number():
    if 'count' not in session:
        session['count'] = 0
    else:
        session['count'] += 1
    return render_template('numDisplay.html', counter=session['count'])

@app.route("/addTwo")
def add_two():
    if 'count' not in session:
        session['count'] = 0
    session['count'] += 2
    return render_template('numDisplay.html', counter=session['count'])


@app.route("/reset")
def reset():
    session.clear()
    return redirect(url_for('number'))

if __name__ == "__main__":
    app.run(debug=True)