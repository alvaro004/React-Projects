const tasks = [
  { id: 1, description: 'Take out the trash', deadline: '10-12-2023', status: false },
  { id: 2, description: 'Study mandarin', deadline: '10-12-2023', status: false },
  { id: 3, description: 'Eat something', deadline: '10-14-2023', status: true },
];

export default function App() {
  return (
    <div>
      <h1>Task Creator</h1>
      <form className="center">
        <textarea cols="30" placeholder="Your task"></textarea>
        <input type="date" />
        <button>Send</button>
      </form>
      {tasks.map((task) => {
        return <Task id={task.id} description={task.description} deadline={task.deadline} status={task.status} />;
      })}
    </div>
  );
}

function Task(task) {
  return (
    <ul>
      <li>Description: {task.description}</li>
      <li>Deadline: {task.deadline}</li>
      <li>Status: {task.status ? 'Done' : 'UnDone'}</li>
    </ul>
  );
}
