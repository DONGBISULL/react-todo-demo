import React from 'react';
import {CiLight} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import Tabs from "./Tabs.jsx";

function TodoHeader({tabs, theme, activeTab, onTabChange, onToggle}) {
    return (
        <>
            <div className="header">
                <button onClick={onToggle}>{theme === 'dark' ? <CiLight/> : <MdDarkMode/>}</button>
                <Tabs tabs={tabs} activeTab={activeTab} onClick={onTabChange}/>
            </div>
        </>
    );
}

export default TodoHeader;