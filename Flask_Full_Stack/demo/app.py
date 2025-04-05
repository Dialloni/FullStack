from flask import Flask, request, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#Configuring the secret key
app.config ['SECRET_KEY'] = 'ThisIsASecretKey'

#Configuring the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#Creating a User class that inherits from db.Model

class User(db.Model):
    #Every user should have a user Id. The primary_key parameter indicates that this id is specific to this record only
    id = db.Column(db.Integer, primary_key=True)  
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False) 



@app.route('/')

def index():
    return render_template("index.html")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port = 3000)