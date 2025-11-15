import React from 'react';
import {IoSunny, IoMoon} from "react-icons/io5";
import Tabs from "./Tabs.jsx";

function TodoHeader({tabs, theme, activeTab, onTabChange, onToggle}) {
    return (
        <>
            <div className="header">
                <button className="theme-btn" onClick={onToggle}>{theme === 'dark' ? <IoSunny/> : <IoMoon/>}</button>
                <Tabs tabs={tabs} activeTab={activeTab} onClick={onTabChange}/>
            </div>
        </>
    );
}

export default TodoHeader;