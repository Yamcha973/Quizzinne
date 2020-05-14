import React from 'react';

const Result = ({score, playAgain, quantity, changeActivePage}) => {
   return(
   <div className="resultPage" >
      <h3>You scored {score}/{quantity} </h3>
      <button id="/" onClick={(event) => {playAgain();changeActivePage(event);}} > Play Again! </button>
   </div>
   )
}

export default Result;