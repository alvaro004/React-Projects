import { useState } from 'react';
import './index.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '' || deadline.trim() === '') return;

    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      deadline: deadline,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo('');
    setDeadline('');
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-group">
        <input type="text" placeholder="Todo" className="input" value={newTodo} onChange={handleTodoChange} />
        <input type="date" className="input" value={deadline} onChange={handleDeadlineChange} />
        <button className="add-button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span className="todo-title">{todo.title}</span>
            <span className="deadline">{todo.deadline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
