import { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // MANAGE DATA
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

  // HANDLE ADDING MORE POST
  function handleAdd(e) {
    e.preventDefault();
  }

  return (
    // CARD FORM
    <div className="App">
      <div className="form-card">
        <h1>Add a new Post</h1>
        <form>
          <input type="text" placeholder="Your title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Your post" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <button onClick={handleAdd}>Add</button>
        </form>
      </div>

      {/* LIST OS POST  */}
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
