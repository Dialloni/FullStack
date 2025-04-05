from flask import Flask, request, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

@app.route("/")
def index():
    return "Hello, World!"

# Displaying users
@app.route("/users")
def displayUsers():
    users = Users.query.all()
    return render_template('displayUsers.html', users=users)

# Adding new users
@app.route("/users/new")
def NewUser():
    return render_template('newUsers.html')

# Creating new users
@app.route("/users/create", methods=['POST'])
def createUser():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        user = Users(fullname=firstname + " " + lastname, email=email)
        db.session.add(user)
        db.session.commit()
        return redirect("/users")

# showing specific user
@app.route("/users/<id>", methods=['GET','POST'])
def showUser(id):
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email'] 
        user = Users.query.get(id)
        user.fullname = firstname + " " + lastname
        user.email = email
        db.session.commit() # save changes
        return redirect("/users")
      # GET request
    else:
      return render_template('showUser.html', user=Users.query.get(id))

# Editing specific user
@app.route("/users/<id>/edit", methods = ['GET'])
def editUser(id):
    if request.method == 'GET':
       user = Users.query.get(id)
       return render_template('editUser.html', user=user)


# Deleting specific user
@app.route("/users/<id>/delete", methods= ['GET'])
def deleteUser(id):
    if request.method == 'GET':
       user = Users.query.get(id)
       db.session.delete(user)
       db.session.commit()
       return redirect("/users")


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.today())


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(debug=True)