import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../api/api';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id)
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <p>Full Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
          <Link to={`/edit-user/${id}`}>
            <button>Edit</button>
          </Link>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;