# Import necessary modules from Flask and SQLAlchemy
from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Initialize the Flask application
app = Flask(__name__)

# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///appointments.db'

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Define the Appointment model
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    date = db.Column(db.Date, nullable=False)  # Date field
    time = db.Column(db.Time, nullable=False)  # Time field
    patient_name = db.Column(db.String(100), nullable=False)  # Patient name field
    complain = db.Column(db.String(200), nullable=False)  # Complain field

# Define the home route to display appointments
@app.route('/')
def index():
    appointments = Appointment.query.all()  # Query all appointments
    return render_template('doctorAppointment.html', appointments=appointments)  # Render the template with appointments

# Define the route to create a new appointment
@app.route('/appointments/new', methods=['GET', 'POST'])
def new_appointment():
    if request.method == 'POST':
        # Get form data
        date_str = request.form['date']
        time_str = request.form['time']
        patient_name = request.form['patient_name']
        complain = request.form['complain']
        
        # Convert strings to date and time objects
        date = datetime.strptime(date_str, '%Y-%m-%d').date()
        time = datetime.strptime(time_str, '%H:%M').time()
        
        # Create a new appointment instance
        new_appointment = Appointment(date=date, time=time, patient_name=patient_name, complain=complain)
        
        # Add the new appointment to the database
        db.session.add(new_appointment)
        db.session.commit()
        
        # Redirect to the home page
        return redirect(url_for('index'))
    
    # Render the new appointment form
    return render_template('newAppointment.html')

# Define the route to cancel an appointment
@app.route('/appointments/<int:id>/cancel')
def cancel_appointment(id):
    appointment = Appointment.query.get_or_404(id)  # Get the appointment by ID or return 404
    db.session.delete(appointment)  # Delete the appointment
    db.session.commit()  # Commit the changes
    return redirect(url_for('index'))  # Redirect to the home page

# Run the application
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True, port=5500)  # Run the app in debug mode on port 5500