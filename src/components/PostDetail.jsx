import React from 'react';
import { useParams } from 'react-router-dom'; 

const PostDetail = ({posts}) => {
  const { id } = useParams();

 

  // Find the post by its ID
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post ? post.title : 'Post not found'}</h1>
      <p>{post ? post.body : 'Sorry, we couldn’t find the post.'}</p>
    </div>
  );
};

export default PostDetail;
