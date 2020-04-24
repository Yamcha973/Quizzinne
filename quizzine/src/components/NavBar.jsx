import React from "react";
import "./NavBarStyle.css";
import logo from "./logo.png";

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
            <img src={logo} alt="Quizzine, le quizz des fins gourmets!"/>
            <ul>                
                {this.state.isAuthenticated ? <li>Démarrer un Quizz</li>: <li>Quizz aléatoire</li> }
                {this.state.isAuthenticated ? <li>Défier un membre</li> : <li>Pourquoi s'inscrire?</li> }
                {this.state.isAuthenticated ? <li>Profil et resultats</li> : <li>Créer un compte</li>  }
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