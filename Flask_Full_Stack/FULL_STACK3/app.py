from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

# Initialize the Flask application
app = Flask(__name__)

# Configuring the secret key for session management
app.config['SECRET_KEY'] = 'ThisIsASecretKey'

# Configuring the database URI and disabling track modifications
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///full_Stack3.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)

# Define the Course model
class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String(500), nullable=False)
    date_created = db.Column(db.DateTime, server_default=db.func.now())

# Define the route for the home page
@app.route('/', methods = ['GET'])
def index():
      if request.method == 'GET':
    # Query all courses from the database
       all_courses = Course.query.all()
    # Render the index.html template with the list of all courses
       return render_template('index.html', all_courses=all_courses)

# Define the route for adding courses
@app.route('/addcourses', methods=['POST'])
def addcourses():
    if request.method == 'POST':
        # Get the form data
        name = request.form['name']
        description = request.form['description']
        # Create a new Course object
        course = Course(name=name, description=description)

        try:
            # Add the course to the database
            db.session.add(course)
            db.session.commit()
            return redirect('/')   #Go back to the main page
        except Exception as e:
            # Print the error and rollback the session in case of an exception
            print("Error", e)
            db.session.rollback()
            return redirect('/')


# Define the route for deleting courses
@app.route('/delete/<int:id>', methods=['POST'])
def delete_course(id):

    if request.method == 'POST':
        
    # Get the course by ID
         course = Course.query.get_or_404(id)
         try:
        # Delete the course from the database
          db.session.delete(course)
          db.session.commit()
         except Exception as e:
        # Print the error and rollback the session in case of an exception
          print("Error", e)
          db.session.rollback()
    # Redirect to the home page
         return redirect('/')

#course Destroying a course Asking user to confirm to delete the course

@app.route('/course/destroy/<int:id>',methods = ['GET'])
def destroy(id):
    if request.method == 'GET':
      course = Course.query.get_or_404(id)
      return render_template('destroy.html', course=course)


# Run the application
if __name__ == '__main__':
    # Create the database tables if they don't exist
    with app.app_context():
        db.create_all()
    # Run the Flask application in debug mode on port 3000
    app.run(debug=True, port=3000)