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
            <input name="todo"
                   value={todo} placeholder="Add Todo"
                   onChange={(e) => onChange(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Add</button>
        </>
    );
};

export default TodoInput;