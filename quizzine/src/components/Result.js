import React from 'react';

const Result = ({score, playAgain, quantity, changeActivePage}) => {
   return(
   <div className=" container-redYellow-box " >
      {/* <div className="resultPage" > */}
      <div className="red-box" >
      <h3 className="yellow-box" >Votre score: {score} bonne(s) réponse(s) sur {quantity}. </h3>
      <button className="yellow-box" id="/" onClick={(event) => {playAgain();changeActivePage(event);}} >REJOUER</button>
   </div>
   </div>
   )
}

export default Result;