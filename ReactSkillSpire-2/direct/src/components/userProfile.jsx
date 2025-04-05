import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { username } = useParams();

  return (
    <>
      <h1>User Profile</h1>
      <h1>Welcome, {username}!</h1>
    </>
  );
}