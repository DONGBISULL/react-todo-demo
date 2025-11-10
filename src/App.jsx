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
    const [todos, setTodos] = useState(() => {
        try {
            let saved = localStorage.getItem("todos");
            console.log(saved)
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.log('localstorage 읽기 실패 ', e)
        }
    });

    /*
     * vue의 computed와 유사한 기능 같음 - 캐싱
     * computed : 의존성 자동 추적
     *
     * useMemo : 의존성 수동 작성 (수동 최적화)
    */
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
        const {value} = e.target;
        setTodo(value);
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

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
