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
        <div className="main-container FormSubscription">
            <div className=" container-redYellow-box ">
              <div className="yellow-box bright-y-box" id="title">
                <h2>Formulaire d'inscription</h2>
              </div>
              <form onSubmit={this.submitForm}>                
                <div>
                  <div className="yellow-box bright-y-box" >
                    <h4>Veuillez entrer vos informations ci-dessous :</h4>
                  </div>                  
                  <div className="yellow-box bright-y-box">
                    <label htmlFor="lastname">Pseudo</label>
                    <input type="text" id="username" name="username" onChange={this.inputChange} value={this.state.username} />
                  </div>
                  <div className="yellow-box bright-y-box">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" onChange={this.inputChange} value={this.state.email} />
                  </div>
                  <div className="yellow-box bright-y-box">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" onChange={this.inputChange} value={this.state.password} />
                  </div>
                  {/* <hr /> */}
                  <div className="yellow-box bright-y-box">
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