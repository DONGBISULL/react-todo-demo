import React, {useState} from 'react';
import styles from './TodoInput.module.css';

const TodoInput = ({onAdd}) => {

    const [text, setText] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        const val = text.trim();
        if (!val) return;
        onAdd(text);        // 먼저 전달
        setText('');
    }

    return (
        <>
            <div className={styles.container}>
                <input className={styles.todoInput}
                       name="todo"
                       value={text} placeholder="Add Todo"
                       onChange={(e) => setText(e.target.value)}/>
                <button className={styles.todoInputBtn} onClick={(e) => handleSubmit(e)}>Add</button>
            </div>
        </>
    );
};

export default TodoInput;