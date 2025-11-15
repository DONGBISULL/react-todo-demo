import React from 'react';

const TodoInput = ({todo, onChange, onAdd}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const val = todo.trim();
        if (!val) return;
        onAdd(todo);        // 먼저 전달
        onChange('');
    }

    return (
        <>
            <div className="footer">
                <input className="todo-input"
                       name="todo"
                       value={todo} placeholder="Add Todo"
                       onChange={(e) => onChange(e.target.value)}/>
                <button className="todo-input-btn" onClick={(e) => handleSubmit(e)}>Add</button>
            </div>
        </>
    );
};

export default TodoInput;