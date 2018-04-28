import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarMenu = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">SGC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/demands">Chamados</Link>
                    </li>
                    </ul>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="nav-link" href="#">Olá {props.userName}</a></li>
                    <li><a onClick={props.onLogout}  className="nav-link" href="#">Sair</a></li>
                </ul>
            </div>
        </nav>
    );
};

NavbarMenu.propTypes = {
    userName: PropTypes.string.isRequired,
    onLogout: PropTypes.func
};

export default NavbarMenu;