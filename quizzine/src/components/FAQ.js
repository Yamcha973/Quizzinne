import React from "react";
import './FAQ.css';

function FAQ(props){
    return (
    <div className="FAQ">
       <div>
            <h1>
                {props.question}
            </h1>
            <p>
                {props.answer}
            </p>
        </div>
    </div>
    );
}

export default FAQ ;
