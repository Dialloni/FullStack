import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import ContactPage from './pages/ContactPage';
import TutorsPage from './pages/TutorsPage';
import TestCarousel from './pages/TestCarousel';
import AddedCoursesPage from './pages/AddedCoursesPage';
import TutorBioPage from './pages/TutorBioPage';
import './App.css';

const ButterflyAnimation = () => {
  const location = useLocation();
  const showButterflies = location.pathname === '/register' || location.pathname === '/login';

  return (
    showButterflies && (
      <>
        <div className="butterfly butterfly-1"></div>
        <div className="butterfly butterfly-2"></div>
        <div className="butterfly butterfly-3"></div>
        <div className="butterfly butterfly-4"></div>
      </>
    )
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <ButterflyAnimation />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tutors" element={<TutorsPage />} />
          <Route path="/carousel" element={<TestCarousel />} />
          <Route path="/added-courses" element={<AddedCoursesPage/>} />
          <Route path="/tutors-bio" element={<TutorBioPage />} />

          {/* Default route */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;