import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Popup component
import Popup from '../components/PopupPage'

// Import images from the assets/images folder
import use1 from '../assets/images/use1.jpeg';
import use2 from '../assets/images/use2.jpeg';

import user5 from '../assets/images/user5.jpeg';
import user3 from '../assets/images/user3.jpeg';
import user4 from '../assets/images/user4.jpeg';




const tutors = [
  {
    name: 'John Doe',
    image: use1,
    course: 'Web Developer',
    bio: 'John is a senior web developer with 10 years of experience in building dynamic websites and applications.',
  },
  {
    name: 'Jane Smith',
    image: use2,
    course: 'Mobile App Developer',
    bio: 'Jane is a mobile app specialist with expertise in cross-platform development and native app design.',
  },
  {
    name: 'Jane Smith',
    image: user3,
    course: 'Data Science & Machine Learning',
    bio: 'Jane is a mobile app specialist with expertise in cross-platform development and native app design.',
  },
  {
    name: 'Jane Smith',
    image: user4,
    course: 'Backend Developer',
    bio: 'Jane is a mobile app specialist with expertise in cross-platform development and native app design.',
  },
  {
    name: 'Jane Smith',
    image: user5,
    course: 'UI/UX Designer',
    bio: 'Jane is a mobile app specialist with expertise in cross-platform development and native app design.',
  },
];

const programs = [
  {
    name: 'Web Development',
    description: 'HTML, CSS, JavaScript, React',
  },
  {
    name: 'Mobile App Development',
    description: 'Kotlin, Swift, Flutter',
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isTutorsDropdownOpen, setIsTutorsDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // useEffect(() => {
  //   document.title = 'Dashboard | Learn and Grow';
  //   const checkToken = async () => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       navigate('/register');
  //     }
  //   }
  //   document.addEventListener('click', () =>{
  //     alert("If you don't have an account please register first");
  //    checkToken();
  //   });
  //   return () => {
  //     document.removeEventListener('click', checkToken
  //     );
  //   }
  // })

  useEffect(() => {
    document.title = 'Dashboard | Learn and Grow';
    const token = localStorage.getItem('token');
    if (!token) {
      setShowPopup(true); // Show popup if the user is not logged in
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
     {showPopup && <Popup onClose={closePopup} />}
      {/* Main Container */}
      <div className="container text-center p-4 bg-info text-light">
        <h1 className="mb-4">Welcome to the Dashboard</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-md-2 mb-3">
            <button
              className="btn btn-info w-100"
              onClick={() => navigate('/about')}
            >
              About
            </button>
          </div>
          <div
            className="col-md-2 mb-3 dropdown"
            onMouseEnter={() => setIsProgramDropdownOpen(true)}
            onMouseLeave={() => setIsProgramDropdownOpen(false)}
          >
            <button
              className={`btn btn-info dropdown-toggle w-100 ${isProgramDropdownOpen ? 'show' : ''}`}
              type="button"
              id="programDropdown"
              data-bs-toggle="dropdown"
              aria-expanded={isProgramDropdownOpen}
            >
              Program
            </button>
            <ul
              className={`dropdown-menu ${isProgramDropdownOpen ? 'show' : ''}`}
              aria-labelledby="programDropdown"
            >
              {programs.map((program, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => navigate('/program')}
                  >
                    {program.name} - {program.description}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <button
              className="btn btn-info w-100"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
          <div
            className="col-md-2 mb-3 dropdown"
            onMouseEnter={() => setIsTutorsDropdownOpen(true)}
            onMouseLeave={() => setIsTutorsDropdownOpen(false)}
          >
            <button
              className={`btn btn-info dropdown-toggle w-100 ${isTutorsDropdownOpen ? 'show' : ''}`}
              type="button"
              id="tutorsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded={isTutorsDropdownOpen}
            >
              Tutors
            </button>
            <ul
              className={`dropdown-menu ${isTutorsDropdownOpen ? 'show' : ''}`}
              aria-labelledby="tutorsDropdown"
            >
              {tutors.map((tutor, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => navigate('/tutors')}
                  >
                    {tutor.name} - {tutor.course}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <button
              className="btn btn-info w-100"
              onClick={() =>{localStorage.removeItem('token');navigate('/')}}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Carousel for Tutors */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={tutor.image}
                    className="d-block rounded-circle mb-3"
                    alt={tutor.name}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    onClick={() => navigate('/tutors')}
                  />
                  <h5>{tutor.name}</h5>
                  <p className="text-muted">{tutor.course}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ filter: 'invert(1)' }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ filter: 'invert(1)' }}
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mt-2 bg-info p-4 rounded">
        <div className="row align-items-stretch"> {/* Ensures equal height */}
          {/* First Card */}
          <div className="col-md-6 d-flex">
            <div className="card mb-3 w-100">
              <div className="row g-0 h-100">
                <div className="col-md-4">
                  <img
                    src={use2}
                    className="img-fluid rounded-start"
                    alt="Learn and Grow"
                    style={{ objectFit: 'cover', height: '100%' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">Learn and Grow</h5>
                      <p className="card-text text-start">
                        Join our programs to gain the skills you need to thrive in today’s competitive job market.
                      </p>
                    </div>
                    <div className="mt-3 text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/about')}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6 d-flex">
            <div className="card mb-3 w-100">
              <div className="row g-0 h-100">
                <div className="col-md-4">
                  <img
                    src={use1}
                    className="img-fluid rounded-start"
                    alt="Elevate Your Career"
                   style={{ objectFit: 'cover', height: '100%' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">Elevate Your Career</h5>
                      <p className="card-text text-start">
                        <h5>Meet Riyad Alsalemi from Uber driver to software developer.</h5>
                        <br />
                        <p>Read his story and learn how he transitioned from a non-technical background to a software developer at Uber.</p>
                      </p>
                    </div>
                    <div className="mt-3 text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/about')}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunity Section */}
      <div className="container text-center py-5 text-white rounded mt-2 bg-info" style={{ backgroundColor: '#2C3E50' }}>
        <h2 className="fw-bold mb-4">The opportunity is yours. We help you take it.</h2>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '24px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                }}
              >
                1
              </div>
              <p className="fw-bold mt-3">Submit Your Application</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '24px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                }}
              >
                2
              </div>
              <p className="fw-bold mt-3">We’ll go over different class and payment options</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '24px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                }}
              >
                3
              </div>
              <p className="fw-bold mt-3">You’ll start learning skills for a new career</p>
            </div>
          </div>
        </div>

        <p className="mt-4">Start your application today</p>

        <button 
        onClick={() => navigate('/contact')}
        className="btn btn-primary mt-3"
        >Apply</button>
      </div>
    </>
  );
};

export default DashboardPage;