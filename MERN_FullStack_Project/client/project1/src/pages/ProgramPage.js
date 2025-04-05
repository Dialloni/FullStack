import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgramPage = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: 'Web Development',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'HTML, CSS, JavaScript, React',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'Kotlin, Swift, Flutter',
    },
    {
      id: 3,
      name: 'Data Science & Machine Learning',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'Python, TensorFlow, Pandas',
    },
    {
      id: 4,
      name: 'Backend Development',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'Node.js, Express, SQL, MongoDB',
    },
    {
      id: 5,
      name: 'Cybersecurity & Ethical Hacking',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: '',
    },
    {
      id: 6,
      name: 'Cloud Computing & DevOps',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'AWS, Docker, Kubernetes',
    },
  ]);

  const [newProgram, setNewProgram] = useState({ name: '', description: '' });
  const [addedCourses, setAddedCourses] = useState([]); // State to track added courses
  const [lastAddedCourse, setLastAddedCourse] = useState(null); // State to track the last added course

  // Add a new program
  const handleAddProgram = () => {
    if (newProgram.name && newProgram.description) {
      const newId = programs.length + 1;
      const addedProgram = { id: newId, ...newProgram, image: 'https://via.placeholder.com/150' }; // Default image
      setPrograms([...programs, addedProgram]);
      setAddedCourses([...addedCourses, addedProgram]); // Add to added courses
      setNewProgram({ name: '', description: '' }); // Reset form
      setLastAddedCourse(addedProgram.name); // Set the last added course
    } else {
      alert('Please fill out all fields to add a program.');
    }
  };

  return (
    <div className="container text-center p-4">
      <h1 className="mb-4">Program Page</h1>
      <p>Explore our programs and offerings here.</p>
      
        {/* Return to Dashboard Button */}
        <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate('/dashboard')}
      >
        Return to Dashboard
      </button>

      {/* Show Last Added Course */}
      {lastAddedCourse && (
        <div className="alert alert-success">
          <strong>{lastAddedCourse}</strong> has been added successfully!
        </div>
      )}

      {/* Add Program Form */}
      <div className="mb-4">
        <h3>Add a New Program</h3>
        <input
          type="text"
          placeholder="Program Name"
          value={newProgram.name}
          onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Program Description"
          value={newProgram.description}
          onChange={(e) =>
            setNewProgram({ ...newProgram, description: e.target.value })
          }
          className="form-control mb-2"
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success me-2" onClick={handleAddProgram}>
            Add Program
          </button>
          <button
            className="btn btn-info"
            onClick={() => navigate('/added-courses', { state: { addedCourses } })}
          >
            See Added Courses
          </button>
        </div>
      </div>

      {/* Program List */}
      <div className="row mt-4">
        {programs.map((program) => (
          <div className="col-md-4 mb-4" key={program.id}>
            <div className="card">
              <img
                src={program.image}
                className="card-img-top"
                alt={program.name}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{program.name}</h5>
                <p className="card-text">{program.description}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    setAddedCourses([...addedCourses, program]);
                    alert(`You have added the ${program.name} course to your list!`);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPage;