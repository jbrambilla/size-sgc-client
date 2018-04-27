import React, { Component } from 'react';

function Login(props) {
    return (
        <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="card">
                    <article className="card-body">
                        <a href="" className="float-right btn btn-outline-primary">Registrar-se</a>
                        <h4 className="card-title mb-4 mt-1">Entrar</h4>
                        <form>
                            <div className="form-group">
                                <label className="float-left">Email</label>
                                <input name="" className="form-control" placeholder="Email" type="email"/>
                            </div>
                            <div className="form-group">
                                <label className="float-left">Senha</label>
                                <input className="form-control" placeholder="******" type="password"/>
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

export default Login