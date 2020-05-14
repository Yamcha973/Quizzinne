import React, { Component } from 'react';
import '../style/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.inputChange =  this.inputChange.bind(this);
    // this.submitForm= this.submitForm.bind(this);
  }
  inputChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  
  render() {
    return(
      <>
      <div className="image">
      <div className="FormSubscription">
          <div className="red-box">
        <h1>Formulaire d'inscription</h1>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="yellow-box">
        <legend>Veuillez entrer vos informations ci-dessous :</legend>
        <div className="form-data">
        <label htmlFor="lastname">Pseudo</label>
        <input type="text" id="username" name="username" onChange={this.inputChange} value={this.state.username} />
        </div>
        <div className="form-data">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" onChange={this.inputChange} value={this.state.email} />
        </div>
        <div className="form-data">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" onChange={this.inputChange} value={this.state.password} />
        </div>
        <hr />
        <div className="form-data">
        <input type="submit" value="Envoyer" />
        </div>
        </div>
        </form>
        </div>
        </div>
        </>
    );
        };
}
export default Login;