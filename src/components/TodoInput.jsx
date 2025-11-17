import React, {useState} from 'react';

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
            <div className="footer">
                <input className="todo-input"
                       name="todo"
                       value={text} placeholder="Add Todo"
                       onChange={(e) => setText(e.target.value)}/>
                <button className="todo-input-btn" onClick={(e) => handleSubmit(e)}>Add</button>
            </div>
        </>
    );
};

export default TodoInput;