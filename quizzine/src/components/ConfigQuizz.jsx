import React, { Component } from 'react';
import axios from 'axios';
import "../style/ConfigQuizzStyle.css";

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
         <div className=" container-redYellow-box bright-cont-ry-box " >
            <div className="red-box bright-r-box" >
               <p className="yellow-box bright-y-box" >Selectionnez Vos Préférences:</p>
            </div>
            <div className="red-box  bright-r-box" >            
               <div className=" yellow-box select-option-box bright-y-box " >
                  <label >Thème des questions:</label>
                  <select id="category_selection" onChange={(event) => changeCategory(event) } >
                    <option value="">Faites votre choix</option>
                    <option value="14">Télévision</option>
                    <option value="9">Culture générale</option>
                    <option value="10">Littérature</option>
                    <option value="13">Théatre</option>
                    <option value="11">Cinéma</option>
                    <option value="12">Musique</option>
                    <option value="15">Jeux Vidéos</option>
                    <option value="16">Jeux de Plateau</option>
                    <option value="17">Sciences: Nature</option>
                    <option value="18">Informatique</option>
                    <option value="19">Mathématiques</option>
                    <option value="20">Mythologie</option>
                    <option value="21">Sport</option>
                    <option value="22">Géographie</option>
                    <option value="23">Histoire</option>
                    <option value="24">Politique</option>
                    <option value="25">Arts</option>
                    <option value="26">Célébrités</option>
                    <option value="27">Animaux</option>
                    <option value="28">Véhicules</option>
                    <option value="29">Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Manga et Animés Japonais</option>
                    <option value="32">Cartoons, Dessins Animés</option>
                  </select>
            </div>
               <div className=" yellow-box select-option-box bright-y-box">
                  <label >Niveaux de difficulté:</label>
                  <select id="level_selection" onChange={(event) => changeLevel(event)}>
                    <option value="">Faites votre choix</option>
                    <option value="easy">Facile</option>
                    <option value="medium">Intermediaire</option>
                    <option value="hard">Difficile</option>
                  </select>                   
            </div>
               <div className=" yellow-box radio-box bright-y-box">
                  <div>                  
                     <label className="radio-input-container" htmlFor="multiple">Choix multiples
                     <input className="radio-input-input" name="type_select" type="radio" id="multiple"
                        onChange={(event) => changeType(event) } value="multiple" />
                     <span className="radio-input-checkmark" ></span>
                     </label>
                     <label className="radio-input-container" htmlFor="boolean">Vrai / Faux
                     <input className="radio-input-input" name="type_select" type="radio" id="boolean"
                     onChange={(event) => changeType(event) } value="boolean" />
                     <span className="radio-input-checkmark" ></span>
                     </label>
                  </div>              
            </div>
               <div className=" yellow-box bright-y-box">
                  <label htmlFor="quantity-input">Nombre de questions:</label>
                  <input type="number" id="quantity-input" defaultValue="4" min="2" max="20" onChange={(event) => changeQuantity(event) } />
            </div>
            </div>
         <div className="red-box bright-r-box" >
            <button className="yellow-box bright-y-box" id="questions" onClick={(event) => {if( this.checkSelectedValue() ) {changeActivePage(event); makeSurvey()}} } >Lancer Quizz</button>          
         </div>
         </div>
      )
   }
}
export default ConfigQuizz;