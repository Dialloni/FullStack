from flask import Flask, request, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuring the secret key
app.config['SECRET_KEY'] = 'ThisIsASecretKey'

# Configuring the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Creating a User class that inherits from db.Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)

@app.route('/')
def index():
    all_users = User.query.all()
    return render_template("index.html", all_users=all_users)

@app.route('/addusers', methods=['POST'])
def add_user():
    email = request.form['email']
    password = request.form['password']
    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    return redirect('/')

@app.route('/update/<int:user_id>', methods=['GET', 'POST'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.email = request.form['email']
        user.password = request.form['password']
        db.session.commit()
        return redirect('/')
    return render_template('update.html', user=user)

@app.route('/delete/<int:user_id>')
def delete(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=3000)