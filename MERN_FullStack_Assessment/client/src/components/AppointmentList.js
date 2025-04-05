import React, { useEffect, useState } from "react";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  const handleCancel = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/appointments/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete appointment");
      }

      setAppointments((prevAppointments) => prevAppointments.filter((appt) => appt._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error.message);
    }
  };

  return (
    <div className="doctor-appointments">
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((appt) => (
          <div key={appt._id} className="appointment-box">
            <div className="field-group">
              <label>Date</label>
              <input type="text" value={appt.date} readOnly />
            </div>
            <div className="field-group">
              <label>Time</label>
              <input type="text" value={appt.time} readOnly />
            </div>
            <div className="field-group">
              <label>Patient Name</label>
              <input type="text" value={appt.patientName} readOnly />
            </div>
            <div className="field-group">
              <label>Complaint</label>
              <textarea value={appt.complaint} readOnly />
            </div>
            <div className="button-group">
              <button onClick={() => handleCancel(appt._id)}>Cancel Appointment</button>
            </div>
          </div>
        ))
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
}

export default AppointmentList;