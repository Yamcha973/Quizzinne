import React, { Component } from 'react';
import axios from 'axios';
import { Router } from 'react-router-dom';
import ConfigQuizz from './ConfigQuizz.jsx';
import Questions from'./Questions.jsx';

class QuizzStart extends Component {
   constructor(props){
      super(props);
      this.state = {
         quizzApi: {},
         score: 0,         
         category: '11',
         level: 'easy',
         quantity: 4,
         type: "multiple",
         survey: [],
         activePage: "/",         
      }
      this.displayPage=this.displayPage.bind(this);
      this.getQuizz=this.getQuizz.bind(this);
      this.changeActivePage=this.changeActivePage.bind(this);
      this.makeSurvey=this.makeSurvey.bind(this);
      this.changeCategory = this.changeCategory.bind(this);
      this.changeType = this.changeType.bind(this);
      this.changeLevel = this.changeLevel.bind(this);
      this.changeQuantity = this.changeQuantity.bind(this);
      this.incrementeScore = this.incrementeScore.bind(this);
      this.resetScore = this.resetScore.bind(this);
   }
   componentDidUpdate(prevProps, prevState){
      if(prevState.quizzApi !== this.state.quizzApi ){
      this.makeSurvey();}
      else if(prevState.level !== this.state.level){this.getQuizz();}
      else if(prevState.category !== this.state.category){this.getQuizz();}
      else if(prevState.type !== this.state.type){this.getQuizz();}
      else if(prevState.quantity !== this.state.quantity){this.getQuizz();}
   }
   getQuizz() {
      const { category, level, quantity, type } = this.state;     
      let urlRequest = `https://opentdb.com/api.php?amount=${quantity}&category=${category}&difficulty=${level}&type=${type}`
      // Send the request
      axios.get(urlRequest)
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
          this.setState({
        quizzApi: data,
          })
      }).then(console.log("request done"))
      console.log(this.state.quizzApi);
      
   }
   componentDidMount(){
      this.getQuizz();
   }   
   changeCategory(event) {
      this.setState({category: event.target.value })}
   changeType(event) {
      this.setState({type: event.target.id })}
   changeLevel(event) {
      this.setState({level: event.target.value })}
   changeQuantity(event) {
      this.setState({quantity: event.target.value })}

   makeSurvey(){
      let newArray = [];
      const response = this.state.quizzApi.results;
      for (let i = 0; i < response.length; i++) {
         
            let randomNum = Math.round(Math.floor(Math.random() * Math.floor(response[i].incorrect_answers.length*100))/100);
            newArray[i] = [response[i].question,[],response[i][1],false];
            newArray[i][1][randomNum] = response[i].correct_answer;
            newArray[i][2] = response[i].correct_answer;
            let count = 0;
            newArray[i][2] = response[i].correct_answer;
            if( i === 0){ newArray[i][3] = true }
         for (let j = 0; j <= response[i].incorrect_answers.length; j++) { 
            if( j !== randomNum ) {
               newArray[i][1][j] = response[i].incorrect_answers[count]
               count++;
            }
         }                 
      }
      this.setState({survey: newArray})
      console.log(this.state.survey);
   }
   changeActivePage(event){
      this.setState({activePage: event.target.id})
   }
   displayPage(){
      switch(this.state.activePage){
         case "/": return <ConfigQuizz {...this.state} changeQuantity={this.changeQuantity} changeType={this.changeType} changeLevel={this.changeLevel} changeCategory={this.changeCategory} changeActivePage={this.changeActivePage} makeSurvey={this.makeSurvey}/>
         case "questions": return <Questions {...this.props} {...this.state} makeSurvey={this.makeSurvey} incrementeScore={this.incrementeScore} resetScore={this.resetScore} changeActivePage={this.changeActivePage}  />
         default : return <ConfigQuizz {...this.state} changeActivePage={this.changeActivePage}/>
      }
   }
   incrementeScore(){
      this.setState({score: this.state.score + 1})
   }
   resetScore(){
      this.setState({score: 0})
   }
   render(){
      
      return (
         <>
         <div className="main-container quizzStart-container" >{this.displayPage()}</div>
         </>
      )
   } 
}

export default QuizzStart;