import React, { useState, useEffect } from 'react';
import { getPosts, createPost } from './api';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleCreatePost = async (post) => {
    const response = await createPost(post);
    setPosts([...posts, response.data]);
  };

  return (
    <div className="App">
      <PostForm onCreate={handleCreatePost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;