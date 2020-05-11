import React, { Component } from 'react';
import axios from 'axios';
import "./ConfigQuizzStyle.css";

class ConfigQuizz extends Component {
   constructor(props){
		super(props);
		this.checkSelectedValue = this.checkSelectedValue.bind(this);
   }

   checkSelectedValue(){
   	const { type, category, quantity, level } = this.props;
      if((type !== "" )&&(level !== "")&&(category !== "")&&(quantity !== 0) ){
         return true;
      }
      else return false
       
   }
   
   render(){
      const {makeSurvey, changeActivePage, changeCategory, changeLevel, changeQuantity, changeType} = this.props;
      return(
         <>
         <p>config du quizz</p>
         <div className="requestSelection" >
                <div>
                    <label htmlFor="category_selection">Thème des questions:</label>
                    <select id="category_selection" onChange={(event) => changeCategory(event) } >
                    <option value="">select category</option>
                    <option value="14">Télévision</option>
                    <option value="11">Cinéma</option>
                    <option value="12">Musique</option>
                    <option value="15">Jeux Vidéos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="level_selection">Niveaux de difficulté:</label>
                    <select id="level_selection" onChange={(event) => changeLevel(event)}>
                    <option value="">select level</option>
                    <option value="easy">Facile</option>
                    <option value="medium">Intermediaire</option>
                    <option value="hard">Difficile</option>
                    </select>                   
                </div>
                <div>
                <label htmlFor="type_selection">Type de questions:</label>
                <select id="type_selection" onChange={(event) => changeType(event)} >
                    <option value="">select type</option>
                    <option value="multiple">Choix multiple</option>
                    <option value="boolean">Vrai / Faux</option>
                </select>
                </div>
                <div>
                <label htmlFor="quantity_selection">Nombre de questions</label>
                <select id="quantity_selection" onChange={(event) => changeQuantity(event) } >
                    <option value="">select quantity</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select> 
                </div>
                <button id="questions" onClick={(event) => {if( this.checkSelectedValue() ) {changeActivePage(event); makeSurvey()}} } >Lancer Quizz</button>

         
         {/* <button id='questions' onClick={ (event) => this.props.changeActivePage(event)} >valider et commencer</button> */}
			<p> {console.log(this.checkSelectedValue())} </p>
         </div>
         </>
         )
   }
}

export default ConfigQuizz;