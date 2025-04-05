import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [complaint, setComplaint] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time, patientName, complaint }),
    });
    if (response.ok) {
      alert("Appointment added!");
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Appointment</h2>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="patientName">Patient Name</label>
        <input type="text" id="patientName" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="complaint">Complaint</label>
        <textarea id="complaint" placeholder="Complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} required />
      </div>
      <div className="button-group">
        <button type="submit">Add Appointment</button>
        <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NewAppointment;