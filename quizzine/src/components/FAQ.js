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
        <button>Contact Us</button>
    </div>
    );
}



export default FAQ ;
