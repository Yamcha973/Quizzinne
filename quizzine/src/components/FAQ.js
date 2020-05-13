import React from "react";
import './FAQ.css';

function FAQ(props){
    return (
    <div className="FAQ">
       <div className="cadrefaq">
            <h1 className="a.qfaq">
                {props.question}
            </h1>
            <p className="rfaq">
                {props.answer}
            </p>
        </div>
    </div>
    );
}

export default FAQ ;
