import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class RegisterUser extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const user = serializeForm(e.target, {hash: true});
        if (this.props.onRegister)
            this.props.onRegister(user);
    }

    render() {
        return (
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="card">
                        <article className="card-body">
                            {this.props.success && ( <p className="text-success">Conta criada com suceso!</p>)}
                            <Link to="/login" className="float-right btn btn-outline-primary">Login</Link>
                            <h4 className="card-title mb-4 mt-1">Registre-se</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="float-left">Nome</label>
                                    <input name="name" className="form-control" placeholder="Nome" required/>
                                </div>
                                <div className="form-group">
                                    <label className="float-left">Email</label>
                                    <input name="email" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="form-group">
                                    <label className="float-left">Senha</label>
                                    <input name="password" className="form-control" placeholder="******" type="password" required/>
                                </div> 
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Cadastrar </button>
                                </div>   
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterUser.propTypes = {
    onRegister: PropTypes.func.isRequired
}

export default RegisterUser;