import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import {Route, Redirect} from 'react-router-dom';
import Login from '../components/Login';
import * as SgcAPI from './../utils/SgcAPI';
import RegisterUser from './../components/RegisterUser';
import NavbarMenu from '../components/NavbarMenu';
import Content from '../components/Content';

class App extends Component {

  state = {
    loginError: '',
    registerSuccess: false,
    registerFailed: false
  }

  componentWillMount() {
    if(localStorage.getItem('auth_token')) {
      this.setState({isAuthenticated: true})
    }
  }

  logoff = () => {
    localStorage.removeItem('auth_token')
    this.setState({isAuthenticated: false})
  }

  authentication = (credentials, history) => {
    SgcAPI.login(credentials)
      .then(result => {
        result = JSON.parse(result)
        if (result['id']) {
          this.setState({isAuthenticated: true})
          localStorage.setItem('auth_token', result['auth_token'])
          localStorage.setItem('userName', result['userName'])
          history.push('/')
        }
      })
      .catch(reason => this.setState({loginError: 'Nome de usuário ou senha inválidos.'}))
  }

  registerUser = (user, history) => {
    SgcAPI.registerUser(user)
      .then(result => {
        if (result === 'Account created') {
          this.setState({registerSuccess: true})
          history.push('/login')
        } else {
          this.setState({registerFailed: true})
        }
      })
      .catch(reason => {
        this.setState({registerFailed: true})
        console.log(reason)
      })
  }

  render() {
    let userName = localStorage.getItem('userName')
    return (
      <div>
        {this.state.isAuthenticated  ? (
          <div>
            <NavbarMenu
              userName={userName}
              onLogout={() => {
                this.logoff();
                <Redirect to="/login"/>
              }}
              
            />
            <Content />
          </div>
        ) : 
        (<Redirect to="/login"/>)}

        <Route path="/login" render={({history}) => (
          <Login
            onAuthentication={(credentials) => {
                this.authentication(credentials, history)
              }
            }
            error={this.state.loginError}
            registerSuccess={this.state.registerSuccess}
          />
        )}/>
        <Route path="/register" render={({history}) => (
          <RegisterUser
            onRegister={(user) => {
              this.registerUser(user, history)
            }}
            failed={this.state.registerFailed}
          />
        )}
        
        />
      </div>
    )
  }
}

export default App;
