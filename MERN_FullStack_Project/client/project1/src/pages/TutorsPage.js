import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/TutorPage.css'; // Import the specific CSS file for the Tutors Page
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import images from the assets folder
import use1 from '../assets/images/use1.jpeg';
import use2 from '../assets/images/use2.jpeg';
import user3 from '../assets/images/user3.jpeg';
import user4 from '../assets/images/user4.jpeg';
import user5 from '../assets/images/user5.jpeg';

const tutors = [
  {
    name: 'John Doe',
    image: use1,
    course: 'Web Development (HTML, CSS, JavaScript, React)',
    bio: 'John is a senior web developer with 10 years of experience in building dynamic websites and applications.',
  },
  {
    name: 'Jane Smith',
    image: use2,
    course: 'Mobile App Development (Kotlin, Swift, Flutter)',
    bio: 'Jane is a mobile app specialist with expertise in cross-platform development and native app design.',
  },
  {
    name: 'Michael Brown',
    image: user3,
    course: 'Data Science & Machine Learning (Python, TensorFlow, Pandas)',
    bio: 'Michael is a data scientist with a passion for AI and machine learning, working on real-world projects.',
  },
  {
    name: 'Thomas Johnson',
    image: user4,
    course: 'Backend Development (Node.js, Express, SQL, MongoDB)',
    bio: 'Emily is a backend engineer who specializes in creating scalable server-side applications.',
  },
  {
    name: 'Mehmet Lee',
    image: user5,
    course: 'UI/UX Design (Figma, Adobe XD, Sketch)',
    bio: 'Sarah is a creative UI/UX designer with a knack for creating user-friendly and visually appealing designs.',
  },
];

const TutorsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container1 text-center p-4">
      <h1 className="mb-4">Meet Our Tutors</h1>
      <p className="mb-4">Our tutors are experts in their fields and are here to help you succeed.</p>

      {/* Return to Dashboard Button */}
      <button
        className="btn btn-secondary mb-4"
        onClick={() => window.location.href = '/dashboard'}
      >
        Return to Dashboard
      </button>

      <div className="row">
        {tutors.map((tutor, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card tutor-card h-100">
              <img
                src={tutor.image}
                className="tutor-image"
                alt={tutor.name}
              />
              <div className="card-body tutor-card-body d-flex flex-column">
                <h5 className="card-title">{tutor.name}</h5>
                <p className="card-text">
                  <strong>Teaches:</strong> {tutor.course}
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate('/tutors-bio', { state: { tutor } })}
                >
                  View Bio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;