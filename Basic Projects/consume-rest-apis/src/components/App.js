import { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
