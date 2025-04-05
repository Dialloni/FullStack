import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user, onDeleteUser }) => {
  return (
    <tr>
      <td>
        <Link to={`/user/${user._id}`}>
          {user.firstName} {user.lastName}
        </Link>
      </td>
      <td>{user.email}</td>
      <td>{new Date(user.createdAt).toLocaleString()}</td>
      <td>
        <Link to={`/user/${user._id}`}>
          <button>Show</button>
        </Link>
        <Link to={`/edit-user/${user._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => onDeleteUser(user._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItem;