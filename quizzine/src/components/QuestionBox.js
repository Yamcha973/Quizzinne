import React, { useState } from 'react';

const QuestionBox = ({question, options, checkAnswer, setSurvey, correctAnswer }) => {
   const [answers, setAnswers] = useState(options);
   return(
   <div className="config-quizz-page" >
      <div className="red-box" >
         <div className="question-text yellow-box" >{question}</div>
      </div>
      <div className="red-box" >
         { answers.map((text, index) => (
         <button className="answer-text yellow-box" key={index} id={text} onClick={(event)=>{setAnswers([text]);checkAnswer(event.target.id, correctAnswer, question); setSurvey(question); }} >{text}</button>
      )) }
      </div>
   </div>
   )
}

export default QuestionBox;