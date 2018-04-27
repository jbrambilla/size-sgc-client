import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Header from './../components/Header';
import {Route} from 'react-router-dom';
import Login from '../components/Login';

class App extends Component {
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
