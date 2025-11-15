import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <>
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                </span>
                <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
                    <FaTrashAlt/>
                </button>
            </li>
        </>
    );
};

export default TodoItem;
