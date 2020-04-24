import React from 'react';
import './App.css';
import Form  from './components/Form';
import Footer from './components/Footer';
import NavBar from './components/NavBar.jsx';




function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Si je cliques sur le bouton connexion, alors j'affiche ce composant.
      event => {
        const newStatus = !this.state.isAuthenticated;
        this.setState({
          isAuthenticated: newStatus
        });
      }
      */}
      
      <Form />
      <Footer />
    </div>
  );
}

export default App;
