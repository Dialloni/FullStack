import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../api/api';
import AddUser from '../components/AddUser';

const AddUserPage = () => {
  const navigate = useNavigate();

  const handleAddUser = (user) => {
    createUser(user)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Add a New User</h1>
      <AddUser onAddUser={handleAddUser} />
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default AddUserPage;