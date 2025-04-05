// filepath: /Users/abubakardiallo/Desktop/skillSpire/REACT/todolistredux/src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './actions'; // Correct path

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;