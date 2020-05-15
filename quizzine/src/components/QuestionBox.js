import React, { useState } from 'react';

const QuestionBox = ({question, options, checkAnswer, setSurvey, correctAnswer }) => {
   const [answers, setAnswers] = useState(options);
   return(
   <div className="container-redYellow-box bright-cont-ry-box" >
      <div className="red-box  bright-r-box" >
         <div className="question-text yellow-box bright-y-box" >{question.replace(/&quot;/g, '\"').replace(/&#039;/g,"\'").replace(/&amp;/g, '\&')}</div>
      </div>
      <div className="red-box bright-r-box" >
         { answers.map((text, index) => (
         <button className="answer-text yellow-box bright-y-box" key={index} id={text} onClick={(event)=>{setAnswers([text]);checkAnswer(event.target.id, correctAnswer, question); setSurvey(question); }} >{text}</button>
      )) }
      </div>
   </div>
   )
}

export default QuestionBox;