import React from 'react';

const Tabs = ({tabs, activeTab, onClick}) => {
    return (
        <>
            <nav className="tab-list" role="tablist">
                {tabs.map(item => (
                    <button key={item.value} role="tab"
                            className={`tab ${activeTab === item.value ? 'active' : ''}`}
                            aria-selected={activeTab === item.value}
                            onClick={() => onClick(item?.value)}>
                        {item.label}
                    </button>
                ))
                }
            </nav>
        </>
    );
};

export default Tabs;