import React from 'react';
import './PostList.css';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post._id}>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default PostList;