import React from "react";
import './FAQ.css';

function FAQ(props){
    return (
    <div className="FAQ">
        <h1>
            {props.question}
        </h1>
        <p>
            {props.answer}
        </p>
    </div>
    );
}



export default FAQ ;
