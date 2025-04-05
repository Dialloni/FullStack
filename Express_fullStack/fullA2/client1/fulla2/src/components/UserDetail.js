import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../api';
import './UserDetail.css';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(id);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p>Height: {user.height} cm</p>
      <p>Weight: {user.weight} lbs</p>
      <p>Dietary Preference: {user.dietaryPreference}</p>
    </div>
  );
}

export default UserDetail;