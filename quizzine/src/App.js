import React, { Component } from 'react';
import './App.css';
import Form  from './components/Login.js';
import Footer from './components/Footer';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import WelcomePage from'./components/WelcomePage.js';
import Profile from'./components/Profile.js';
import QuizzStart from'./components/QuizzStart.jsx';
import Why from './components/Why.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated: true ,
    }
    this.changeStatus = this.changeStatus.bind(this);
  }
  changeStatus(){
    this.setState({isAuthenticated: !this.state.isAuthenticated})
  }
  render(){
    return (
      <div className="App">
        
        <Router>
          <NavBar {...this.state} changeStatus={this.changeStatus} />
          <Switch>
            <Route path="/why">
              <Why />
            </Route> 
            <Route path="/form" >
              <Form />
            </Route>
            <Route path="/quizz-start" >
              <QuizzStart />
            </Route>
            <Route path="/profile" >
              <Profile />
            </Route>
            <Route exact path="/" >
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
