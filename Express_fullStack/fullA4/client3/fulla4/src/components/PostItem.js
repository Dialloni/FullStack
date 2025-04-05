import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      {/* <p>By: {post.author.firstName} {post.author.lastName}</p> */}
      <p>At: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PostItem;