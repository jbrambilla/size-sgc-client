import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Application from './../components/Application';
import {Route, Redirect} from 'react-router-dom';
import Login from '../components/Login';
import * as SgcAPI from './../utils/SgcAPI';

class App extends Component {

  state = {
    loginError: ''
  }

  componentDidMount() {
    // SgcAPI.login('joao@domain.com','123123')
    //   .then(value => console.log(value));
    //  SgcAPI.getAll().then(val => console.log(val));
  }

  authentication = (credentials) => {
    this.setState({token: '123'})

    if (!credentials.username || !credentials.password) {
      this.setState({loginError: 'Nome de usuário ou senha inválidos.'})
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ () => 
          this.state.token ? (<Application/>) : (<Redirect to="/login"/>)
        }/>
        <Route path="/login" render={({history}) => (
          <Login
            onAuthentication={(credentials) => {
              if (this.authentication(credentials))
                history.push('/')
            }}
            error={this.state.loginError}
          />
        )}/>
      </div>
    )
  }
}

export default App;
