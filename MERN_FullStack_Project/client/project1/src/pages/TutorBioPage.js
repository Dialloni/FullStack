import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TutorBioPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const tutor = location.state?.tutor;

  console.log('Tutor data received:', tutor); // Debugging log

  if (!tutor) {
    return <p className="text-center mt-5">Tutor not found!</p>;
  }

  return (
    <div className="container text-center p-4">
      <h1 className="mb-4">{tutor.name}</h1>
      <img
        src={tutor.image}
        alt={tutor.name}
        className="rounded-circle mb-4"
        style={{ height: '200px', width: '200px', objectFit: 'cover' }}
      />
      <h3 className="mb-3">{tutor.course}</h3>
      <p>{tutor.bio}</p>
      <div className="mt-4">
        {/* Go Back Button */}
        <button
          className="btn btn-secondary me-2"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        {/* Return to Tutors Page Button */}
        <button
          className="btn btn-primary"
          onClick={() => navigate('/tutors')}
        >
          Return to Tutors Page
        </button>
      </div>
    </div>
  );
};

export default TutorBioPage;