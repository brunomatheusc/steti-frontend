import React from 'react';

import './styles.css';

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-3">
                        <div className="form-login">
                            <div className="logo">
                                <img src="/assets/img/logo-2_semfundo.png" className="img-responsive"/>
                                <h4 className="text-white">Login</h4>
                            </div>

                            <input type="text" id="username" className="form-control form-control2 input-sm chat-input" placeholder="Usuário" />

                            <br />

                            <input type="password" id="password" className="form-control form-control2 input-sm chat-input" placeholder="Senha" />

                            <br />

                            <div className="wrapper">
                                <span className="group-btn">
                                    <a href="#" className="btn btn-primary btn-md">Entrar <i className="fa fa-sign-in"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}