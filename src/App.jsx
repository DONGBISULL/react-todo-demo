import {useContext, useEffect, useMemo, useState} from "react";
import {generateId} from "./utils/commons.js";
import Tabs from "./components/Tabs.jsx";
import TodoInput from "./components/TodoInput.jsx";
import {ThemeContext} from "./context/ThemeContext.jsx";
import {CiLight} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import TodoList from "./components/TodoList.jsx";
import TodoHeader from "./components/TodoHeader.jsx";

function App() {
    const tabs = [
        {value: 'all', label: 'All'},
        {value: 'active', label: 'Active'},
        {value: 'complete', label: 'Complete'},
    ]

    const {theme, toggleTheme} = useContext(ThemeContext);

    const [activeTab, setActiveTab] = useState("all");
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(() => {
        try {
            let saved = localStorage.getItem("todos");
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

    const handleChange = (value) => {
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
            <div className="todo-container">
                <TodoHeader tabs={tabs} theme={theme} activeTab={activeTab} onTabChange={handleTabChange} onToggle={toggleTheme}/>
                <TodoList todos={filterTodos} onDelete={handleDelete} onToggle={handleToggle}/>
                <TodoInput
                    todo={todo}
                    onChange={handleChange}        // 또는 handleChange
                    onAdd={handleAdd}
                />
            </div>
        </>
    );
}

export default App
