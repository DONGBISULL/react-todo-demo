import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import styles from "./TodoList.module.css";

function TodoList({todos, onToggle, onDelete}) {
    return (
        <div className={styles.content}>
            {
                todos.length === 0 ? (
                    <p className={styles.nodata}>할 일을 등록해주세요</p>
                ) : (
                    <ul className={styles.list}>
                        {
                            todos.map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                                )
                            )
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default TodoList;