import React, { useState } from 'react';
import './PostForm.css';

function PostForm({ onCreate }) {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreate({ content: newPost });
    setNewPost('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        name="post"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Write your post here..."
        required
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;