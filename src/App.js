
import './App.css';

import { React, useState, useEffect } from 'react';

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
            <div className="card mt-3" key={post.id}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>

                <p className="card-text">{post.body}</p>
              </div>
            </div>
          );
          })}
      </div>
    </div>
  );
}

export default App;
