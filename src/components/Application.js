import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Application extends Component {
    render() {
        let userName = localStorage.getItem('userName');
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">SGC</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chamados</a>
                            </li>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="nav-link" href="#">Olá {userName}</a></li>
                            <li><a onClick={this.props.onLogout}  className="nav-link" href="#">Sair</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container body-content">
                    <hr />
                    <footer>
                        <p>&copy; 2018 - Sistema de Gerenciamento de Chamados</p>
                    </footer>
                </div>
            </div>
        )
    }
}

Application.propTypes = {
    onLogout: PropTypes.func.isRequired
}

export default Application