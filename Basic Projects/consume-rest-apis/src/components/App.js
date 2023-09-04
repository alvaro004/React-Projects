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

  //ADDING MORE POST IN THE API
  async function addPosts(title, body) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle('');
        setBody('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // HANDLE ADDING MORE POST
  function handleAdd(e) {
    e.preventDefault();
    addPosts(title, body);
  }

  //HANDLE DELETE POST
  async function handleDelete(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
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
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
