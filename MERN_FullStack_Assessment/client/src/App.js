import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppointmentList from "./components/AppointmentList";
import NewAppointment from "./components/NewAppointment";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Doctor's Appointments</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/new-appointment">Add Appointment</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AppointmentList />} />
          <Route path="/new-appointment" element={<NewAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;