import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Header from './../components/Header';
import {Route} from 'react-router-dom';
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
        <Header/>
          <div className="container body-content">
            <Route path="/login" component={Login}/>
            <hr />
            <footer>
                <p>&copy; 2018 - Sistema de Gerenciamento de Chamados</p>
            </footer>
        </div>
      </div>
    );
  }
}

export default App;
