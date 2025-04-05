import React, { useState } from 'react';
import styles from './TodoList.module.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className={styles.todoList}>
      <input
        type="text"
        className={styles.inputField}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add
      </button>
      {todos.length === 0 ? (
        <p className={styles.noTodosMessage}>No todos available</p>
      ) : (
        <ul className={styles.todoListItems}>
          {todos.map((todo, index) => (
            <li key={index} className={styles.todoItem}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;