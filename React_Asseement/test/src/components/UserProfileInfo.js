import React from 'react';
import styles from './TodoList.module.css'; // Import the CSS module

function UserProfileInfo({ name, bio, avatarUrl }) {
  return (
    <div className={styles.userProfileInfo}>
      <img src={avatarUrl} alt={`${name}'s avatar`} className={styles.avatar} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfileInfo;