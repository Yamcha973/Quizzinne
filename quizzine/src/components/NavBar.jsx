import React from "react";
import "./NavBarStyle.css";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : false,
        }        
    }
    
    render() {
        return(                 
        <div className="gui-navBar" >
            
             
            <ul>
                <li><Link to='/' >Accueil</Link></li>                
                {this.state.isAuthenticated ? <li><Link to='quizz-start' >Démarrer un Quizz</Link></li>: <li>Quizz aléatoire</li> }
                {this.state.isAuthenticated ? <li>Quizz aléatoire</li> : <li><Link to='why' >Pourquoi s'inscrire?</Link></li> }
                {this.state.isAuthenticated ? <li><Link to='profile' >Profil et resultats</Link></li> : <li><Link to='form' >Créer un compte</Link></li> }
                <li onClick={event => {
                const newStatus = !this.state.isAuthenticated;
                this.setState({ isAuthenticated: newStatus });}}
                 className="authentification">{this.state.isAuthenticated ? "Déconnexion" : "Connexion" }</li>                
            </ul>
           
        </div>
        );
    }
}

export default NavBar;