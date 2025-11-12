import React from 'react';
import TodoItem from "./TodoItem.jsx";

function TodoList({todos, onToggle, onDelete}) {
    if (todos.length === 0) {
        return (
            <p className="empty-message"> 할 일을 등록해주세요</p>
        )
    }
    return (
        <ul className='tab-content'>
            {
                todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                    )
                )
            }
        </ul>
    );
}

export default TodoList;