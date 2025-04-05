import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../api/api';
import AddUser from '../components/AddUser';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id)
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleUpdateUser = (updatedUser) => {
    updateUser(id, updatedUser)
      .then(() => navigate(`/user/${id}`))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Edit User</h1>
      {user && <AddUser onAddUser={handleUpdateUser} editingUser={user} />}
      <Link to={`/user/${id}`}>
        <button>Show</button>
      </Link>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default EditUserPage;