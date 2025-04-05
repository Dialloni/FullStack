import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddedCoursesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const addedCourses = location.state?.addedCourses || []; // Fallback to an empty array if no data is passed

  // Handle delete course
  const handleDeleteCourse = (id) => {
    const updatedCourses = addedCourses.filter((course) => course.id !== id);
    navigate('/added-courses', { state: { addedCourses: updatedCourses } }); // Update the state and refresh the page
  };

  // Handle update course
  const handleUpdateCourse = (course) => {
    navigate('/program', { state: { courseToUpdate: course } }); // Navigate to ProgramPage with the course to update
  };

  return (
    <div className="container text-center p-4">
      <h1 className="mb-4">Added Courses</h1>

      {/* Return to Program Page Button */}
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate('/program')}
      >
        Return to Program Page
      </button>

      {addedCourses.length === 0 ? (
        <p>No courses have been added yet.</p>
      ) : (
        <div className="row">
          {addedCourses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.name}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleUpdateCourse(course)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddedCoursesPage;