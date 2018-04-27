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

  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.setState({isAuthenticated: true})
    }
  }

  logoff = () => {
    localStorage.removeItem('token')
    this.setState({isAuthenticated: false})
  }

  authentication = (credentials, history) => {
    SgcAPI.login(credentials)
      .then(result => {
        result = JSON.parse(result)
        if (result['id']) {
          this.setState({isAuthenticated: true})
          localStorage.setItem('token', result['auth_token'])
          localStorage.setItem('userName', result['userName'])
          history.push('/')
        }
      })
      .catch(reason => this.setState({loginError: 'Nome de usuário ou senha inválidos.'}))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ ({history}) => 
          this.state.isAuthenticated ? 
            (<Application
              onLogout={() => {
                this.logoff();
                history.push('/login')
              }}
            />) : 
            (<Redirect to="/login"/>)
        }/>
        <Route path="/login" render={({history}) => (
          <Login
            onAuthentication={(credentials) => {
                this.authentication(credentials, history)
              }
            }
            error={this.state.loginError}
          />
        )}/>
      </div>
    )
  }
}

export default App;
