const task = [
  { id: 1, description: 'Take out the trash', status: false },
  { id: 2, description: 'Study mandarin', status: false },
];

export default function App() {
  return (
    <div>
      <h1>Task Creator</h1>
      <form>
        <textarea cols="30" placeholder="Your task"></textarea>
        <button>Send</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
