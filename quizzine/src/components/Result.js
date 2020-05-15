import React from 'react';

const Result = ({score, playAgain, quantity, changeActivePage}) => {
   return(
   <div className=" container-redYellow-box bright-cont-ry-box " >
      {/* <div className="resultPage" > */}
      <div className="red-box bright-r-box" >
      <h3 className="yellow-box bright-y-box" >Votre score: {score} bonne{(score>1)&& "s"} réponse{(score>1)&& "s"} sur {quantity} questions. </h3>
      <button className="yellow-box bright-y-box" id="/" onClick={(event) => {playAgain();changeActivePage(event);}} >REJOUER</button>
   </div>
   </div>
   )
}

export default Result;