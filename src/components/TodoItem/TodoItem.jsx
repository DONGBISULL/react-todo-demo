import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import styles from './TodoItem.module.css';

const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <>
            <li className={styles.todoItem}>
                <label className={`${styles.todoLabel} ${todo.completed ? styles.completed : ''}`}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                    />
                    <span className={styles.todoText}>{todo.text}</span>
                </label>
                <button className={styles.todoDeleteBtn} onClick={() => onDelete(todo.id)}>
                    <FaTrashAlt/>
                </button>
            </li>
        </>
    );
};

export default TodoItem;
