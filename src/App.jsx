import {useEffect, useMemo, useState} from "react";
import TodoItem from "./components/TodoItem.jsx";
import {generateId} from "./utils/commons.js";
import "./App.css";

function App() {
    const tabs = [
        {value: 'all', label: 'All'},
        {value: 'active', label: 'Active'},
        {value: 'complete', label: 'Complete'},
    ]

    const [activeTab, setActiveTab] = useState("all");
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
        {id: generateId(), text: '항목 1', completed: false},
        {id: generateId(), text: '항목 2', completed: false},
    ]);

    const filterTodos = useMemo(() => {
        if (activeTab === "all") return todos;
        if (activeTab === "active") return todos.filter(item => !item.completed);
        if (activeTab === "complete") return todos.filter(item => item.completed);
    }, [todos, activeTab]);

    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ?
                {...todo, completed: !todo.completed}
                : todo));
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleAdd = (todo) => {
        setTodos(
            [...todos, {id: generateId(), text: todo, completed: false}]
        )
    }

    const handleChange = (e) => {
        console.log(e.target)
        const {value} = e.target;
        console.log(" value " + value)
        setTodo(value);
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    // 렌더링이 완료된 후 실행
    useEffect(() => {
        console.log(`Todos: 변경 ${JSON.stringify(todos)}`);
    }, [todos])

    return (
        <>
            <nav className="tab-container">
                <ul className="tab-list">
                    {tabs.map(item => (
                        <li key={item.value} className={`tab ${activeTab === item.value ? 'active' : ''}`}
                            onClick={() => handleTabChange(item?.value)}>
                            {item.label}
                        </li>
                    ))
                    }
                </ul>
            </nav>
            <ul className='tab-content'>
                {
                    filterTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete}/>
                        )
                    )
                }
            </ul>
            <input name="todo" value={todo} placeholder="Add Todo" onChange={(e) => handleChange(e)}/>
            <button onClick={() => handleAdd(todo)}>Add</button>
        </>
    );
}

export default App
