import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../components/AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="about-page-container">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p>
          Our mission is to empower individuals with the skills and knowledge they need to succeed in today's fast-paced digital world.
        </p>

        {/* Return to Dashboard Button */}
        <button
          className="btn btn-secondary mb-4"
          onClick={() => navigate('/dashboard')}
        >
          Return to Dashboard
        </button>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-2" />
              <h3 className="font-bold">John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-2" />
              <h3 className="font-bold">Jane Smith</h3>
              <p>CTO</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-2" />
              <h3 className="font-bold">Alice Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-4">Our Journey</h2>
          <ul className="list-disc pl-6">
            <li>Founded in 2025 with a vision to make learning accessible to everyone.</li>
            <li>Launched our first program in 2025, helping over 1 student.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-4">What Our Students Say</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            "This platform changed my life! The courses are top-notch, and the instructors are amazing."
            <br />
            <span className="font-bold">- Sarah Lee</span>
          </blockquote>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Join Us Today!</h2>
          <p>
            Ready to start your learning journey? <a href="/register" className="text-blue-500 underline">Sign up now</a> and take the first step toward your future.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            <a href="/contact" className="text-blue-500 underline">Contact Us</a>
          </p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;