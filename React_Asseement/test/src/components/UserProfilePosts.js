import React, { useState } from 'react';
import styles from './TodoList.module.css';

function UserProfilePosts() {
  const [posts] = useState(['Study', 'Exercise', 'Play', 'Sleep']);

  return (
    <div className={styles.userProfilePosts}>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p className={styles.noPostsMessage}>No posts available</p>
      ) : (
        <ul className={styles.postList}>
          {posts.map((post, index) => (
            <li key={index} className={styles.postItem}>{post}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserProfilePosts;