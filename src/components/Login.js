import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const credentials = serializeForm(e.target, {hash: true});
        if (this.props.onAuthentication)
            this.props.onAuthentication(credentials);
    }

    render() {
        return (
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="card">
                        <article className="card-body">
                            {this.props.error && ( <p className="text-danger">{this.props.error}</p>)}
                            <a href="" className="float-right btn btn-outline-primary">Registrar-se</a>
                            <h4 className="card-title mb-4 mt-1">Entrar</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="float-left">Email</label>
                                    <input name="username" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label className="float-left">Senha</label>
                                    <input name="password" className="form-control" placeholder="******" type="password"/>
                                </div> 
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Entrar  </button>
                                </div>   
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    onAuthentication: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default Login