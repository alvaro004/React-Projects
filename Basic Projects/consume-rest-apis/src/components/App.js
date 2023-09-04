export default function App() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div className="App">
      <div className="card"></div>
    </div>
  );
}
