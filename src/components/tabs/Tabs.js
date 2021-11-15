import React, { useState } from 'react';
import './tabs.scss';

export default function Tabs() {

    const [ toggleState, setToggleState ] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="tabSection">
            <div className="tabHeading">
                <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>Tab 1</h2>
                <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>Tab 2</h2>
                <h2 className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}>Tab 3</h2>
            </div>
            <div className="tabPara">
                <p 
                className={toggleState === 1 ? "tab-content active-tab-content" : "tab-content"}>
                    Lorem ipsum dolor sit amet, consectetur adip</p>
                <p 
                className={toggleState === 2 ? "tab-content active-tab-content" : "tab-content"}>
                    Lorem ipsum dolor sit amet, consectetur  content 2</p>
                <p 
                className={toggleState === 3 ? "tab-content active-tab-content" : "tab-content"}>
                    Lorem ipsum dolor sit amet, consectetur adip content 3</p>
            </div>
        </div>
    )
}
