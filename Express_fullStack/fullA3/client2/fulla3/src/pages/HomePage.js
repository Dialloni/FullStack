import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../api/api';
import UserList from '../components/UserList';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Users</h1>
      <Link to="/add-user">
        <button>Add a New User</button>
      </Link>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default HomePage;