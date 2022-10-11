
import './App.css';

import { React, useState, useEffect } from 'react';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
    // console.log(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {posts.map((post) => {
          return (
            <PostList key={post.id} {...post}/>
          
         ) })}
      </div>
    </div>
  );
}

export default App;
