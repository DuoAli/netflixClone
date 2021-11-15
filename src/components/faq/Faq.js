import React, { useState } from 'react';
import {Faqs} from './Faqs';
import './faq.scss';
import { FiPlus, FiMinus } from 'react-icons/fi';


export default function Faq() {

    const [ clicked , setClicked ] = useState();

    const toggle = (index) => {
        if(clicked === index) {
            //if a cliecked section is already active close it
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div className="faqSection">
            <div className="faqContainer">
                {Faqs.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="Wrap" onClick={() => toggle(index)}>
                                <h1>{item.question}</h1>
                                <span> {clicked === index ? <FiMinus/> : <FiPlus/>} </span>
                            </div>
                            {clicked === index ? (
                            <div className="dropDown" >
                                <p> {item.answer} </p>    
                            </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
