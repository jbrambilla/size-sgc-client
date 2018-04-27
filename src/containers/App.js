import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Header from './../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div class="container body-content">

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
