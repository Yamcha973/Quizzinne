import React from 'react';
import './App.css';
import Form  from './components/Login.js';
import Footer from './components/Footer';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import WelcomePage from'./components/WelcomePage.js';
import Profile from'./components/Profile.js';
import QuizzStart from'./components/QuizzStart.jsx';
import Why from './components/Why';


function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar />
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

export default App;
