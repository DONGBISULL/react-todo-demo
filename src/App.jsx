import {useEffect, useState} from "react";
import TodoItem from "./components/TodoItem.jsx";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: '항목 1', completed: false},
        {id: 2, text: '항목 2', completed: false},
    ]);

    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ?
                {...todo, completed: !todo.completed}
                : todo));
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // 렌더링이 완료된 후 실행
    useEffect(() => {
        console.log(`Todos: 변경 ${JSON.stringify(todos)}`);
    }, [todos])

    return (
        <>
            <ul>
                {
                    todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} onDelete={handleDelete}/>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default App
