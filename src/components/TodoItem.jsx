import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <>
            <li className="todo-item">
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>
                    <FaTrashAlt/>
                </button>
            </li>
        </>
    );
};

export default TodoItem;