import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className='card'
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className='card-body'>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
}
