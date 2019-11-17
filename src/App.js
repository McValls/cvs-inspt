import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'

const axios = require('axios');

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {logged: false}
  }

  onSuccessfulLogin = () => {
    this.setState(state => ({
      logged: true
    }));
  }

  redirectToCurriculumVitae = () => {
    return <Redirect to='/cv' />
  }

  render () { 

    if(!this.state.logged) {
      return (
        <div className="App">
          Holi
        </div>
      )
    } else {
      return (
        <div>
          {this.redirectToCurriculumVitae()}
        </div>
      )
    } 
  }
}

export default App;
