import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'

const axios = require('axios');

class SignUp extends React.Component {

    constructor(props){
      super(props);
      this.successfulCallback = props.successfulCallback;
    }

    state = {
        mustLogin: false
    }
  
    handleClick(e) {
      axios.post('http://localhost:4000/cvs-inspt/users', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      })
      .then(user => this.successfulSignUp())
      .catch(err => this.setState({logged: false}));
    }

    successfulSignUp = () => {
      this.setState({mustLogin: true});
    }

    redirectToLogin = () => {
        if(this.state.mustLogin) {
            return <Redirect to='/' />
        }
    }

    render() {    
      return (
          <div>
            {this.redirectToLogin()}
            <header>
                <h1>
                    Registro de usuario
                </h1> 
        
                <div className="container">
                    <input type="text" id="username"></input>
                </div>
        
                <div className="container">
                    <input type="password" id="password"></input>
                </div>
        
                <div>
                  <button onClick={(e) => this.handleClick(e)}>Ingresar</button>
                </div>
            </header>
          </div>
        
      );
    }
  }

  export default SignUp;