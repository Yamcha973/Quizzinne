import React from 'react';
import './App.css';
import FAQ from'./components/FAQ';

function App() {
  return (
    <div className="App">
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <button>Contact Us</button>
    </div>
  );
}

export default App;
