import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-item" key={user._id}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;