import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">SGC</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Chamados</a>
                </li>
                </ul>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><Link className="nav-link" to="/login">Login</Link></li>
                <li><a className="nav-link" href="#"></a></li>
            </ul>
          </div>
        </nav>
    )
}

export default Header