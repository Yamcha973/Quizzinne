import React, { Component } from 'react';
import QuestionBox from './QuestionBox';
import Result from './Result.js';

class Questions extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.checkAnswer = this.checkAnswer.bind(this);
        this.playAgain = this.playAgain.bind(this);
        this.setSurvey = this.setSurvey.bind(this);
    }
    componentDidMount(){
        console.log("comp did Mount questions")
        const { makeSurvey } = this.props;
        makeSurvey();
    }
    playAgain(){ 
        const { resetScore } = this.props;       
        this.setState({count: 0})
        resetScore();
    }
    checkAnswer(id, correctAnswer, text){
        const {survey, count, score, incrementeScore, decrementeScore } = this.props;                
        if (id === correctAnswer ){ incrementeScore(); this.setState({count: this.state.count + 1}); }        
        else { this.setState({count: this.state.count + 1}); }

    } 
    setSurvey(question){
        const { survey } = this.props;
        for (let i = 0 ; i < survey.length ; i++){
            if ((i === survey.length - 1)&&(survey[i][0] === question) ){
                survey[i][3] = false
            }
            else if(survey[i][0] === question){
                survey[i][3] = false;
                survey[i+1][3] = true;
            }
        }
    }       
    render(){

        const { survey, quizzApi, score, quantity, changeActivePage } = this.props;
        return(            
        <>                        
            {(survey.length > 0) && 
            (this.state.count < quantity) &&
            survey.filter(element => element[3] === true).map((element) => 
            <QuestionBox question={element[0]} correctAnswer={element[2]} options={element[1]} key={element[0]} checkAnswer={this.checkAnswer} setSurvey={this.setSurvey}/>
            )}
            { (this.state.count == quantity) && <Result {...this.state} {...this.props} playAgain={this.playAgain} changeActivePage={changeActivePage} /> }
        </>
        )    
    } 
}

export default Questions;