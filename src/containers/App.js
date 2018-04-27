import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Application from './../components/Application';
import {Route, Redirect} from 'react-router-dom';
import Login from '../components/Login';
import * as SgcAPI from './../utils/SgcAPI';

class App extends Component {

  state = {
    token: ''
  }

  componentDidMount() {
    // SgcAPI.login('joao@domain.com','123123')
    //   .then(value => console.log(value));
    //  SgcAPI.getAll().then(val => console.log(val));
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ () => 
          this.state.token ? (<Application/>) : (<Redirect to="/login"/>)
        }/>
        <Route path="/login" component={Login}/>
      </div>
    )
  }
}

export default App;
