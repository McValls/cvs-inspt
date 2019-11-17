import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'

const axios = require('axios');

class Login extends React.Component {

    constructor(props){
      super(props);
      this.successfulCallback = props.successfulCallback;
    }

    state = {
        logged: false,
        mustSignUp: false
    }
  
    handleClick(e) {
      axios.post('http://localhost:4000/cvs-inspt/login', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      })
      .then(user => this.successfulLogin(user))
      .catch(err => this.setState({logged: false}));
    }

    successfulLogin = (user) => {
      this.setState({logged: true});
      window.localStorage.setItem("loggedUserId", user.data._id);
    }

    redirectToCurriculumVitae = () => {
        if(this.state.logged) {
            return <Redirect to='/cv' />
        }
    }

    goToSignUp = () => {
      this.setState({mustSignUp: true});
    }

    redirectToSignUp = () => {
      if(this.state.mustSignUp) {
        return <Redirect to='/sign-up' />
      }
    }
  
    render() {    
      return (
          <div>
            {this.redirectToCurriculumVitae()}
            {this.redirectToSignUp()}
            <header>
                <h1>
                    Login
                </h1> 
        
                <div class="container">
                    <input type="text" id="username"></input>
                </div>
        
                <div class="container">
                    <input type="password" id="password"></input>
                </div>
        
                <div>
                  <button onClick={(e) => this.handleClick(e)}>Ingresar</button>
                </div>
                
                <a onClick={(e) => this.goToSignUp()}>Registrar nuevo usuario</a>
            </header>
          </div>
        
      );
    }
  }

  export default Login;