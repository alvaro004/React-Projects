import { useState } from 'react';

const tasks = [
  { id: 1, description: 'Take out the trash', deadline: '2023-08-11', status: false },
  { id: 2, description: 'Study mandarin', deadline: '2023-08-12', status: false },
  { id: 3, description: 'Eat something', deadline: '2023-08-13', status: true },
];

export default function App() {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  function handleForm(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), description, deadline, status: false };
    console.log(newTask);
  }

  return (
    <div>
      <h1>Task Creator</h1>
      <form className="center" onSubmit={handleForm}>
        <textarea cols="30" placeholder="Your task" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} required />
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
