import React, { Component } from 'react';

class Questions extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.checkAnswer = this.checkAnswer.bind(this);
        this.changeCount = this.changeCount.bind(this);
    }
    
    checkAnswer(event){
        const {survey, score, incrementeScore, decrementeScore } = this.props;
        if ((event.target.id === "answer0") && ( survey[1][2] === 0 )){ incrementeScore(); }
        else if ((event.target.id === "answer1") && ( survey[1][2] === 1 )){ incrementeScore(); }
        else if ((event.target.id === "answer2") && ( survey[1][2] === 2 )){ incrementeScore(); }
        else if ((event.target.id === "answer3") && ( survey[1][2] === 3 )){ incrementeScore(); }
        else { decrementeScore(); }
        this.changeCount();
    }
    changeCount(){

    }
            
    render(){
        const { survey, count, quizzApi, score } = this.props;
        return(            
        <div>
            <p>deroulement des questions</p>
            <p>{this.props.survey[1][0]}</p>
            <>{survey[1][1].map( (answer, index) => <button id={`answer${index}`} onClick={(event) => this.checkAnswer(event)}>{answer} </button> )}</>
            <p>Score: {this.props.score} </p>
        </div>
        )    
    } 
}

export default Questions;