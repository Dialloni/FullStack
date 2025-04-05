from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'

db = SQLAlchemy(app)


@app.route('/')

def aboutMe():
    return render_template('flaskA1.html')
if __name__ == '__main__':
    app.run(debug = True, port = 4000)