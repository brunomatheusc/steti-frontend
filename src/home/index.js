import React from 'react';

import './styles.css';
import Menu from './../shared/menu';

export default function Home() {
    return (
        <>
            <Menu/>
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <img src="/assets/img/bg-1.png" className="card-img" style={{ width: '100%' }} />

                            <div className="card-img-overlay">
                                <div className="row mt-5">
                                    <div className="col-md-4 margin-img-home">
                                        <h3>Procurando por profissionais de beleza?</h3>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 margin-img-home">
                                        <p>
                                            Veja como é fácil contratar um profissional de beleza<br/> 
                                            e estética. Em poucos cliques ele irá até você.
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 margin-img-home">
                                        <p>
                                            <strong>É simples, rápido e fácil</strong>
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 margin-img-home">
                                        <button className="btn btn-primary pull-left">CONTRATE JÁ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-2 mt-2 mb-4">
                        <div className="row">
                            <div className="col-md-10 offset-2">
                                <div className="text-justify">
                                    <h3 className="">PLANOS</h3>

                                    <h4 className="">PRÉ <br/> PAGOS</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-2 mt-2">
                        <div className="prices">
                            <h2>R$</h2>
                            <h4>50,00</h4>
                        </div>
                    </div>

                    <div className="col-md-2 mt-2">
                        <div className="prices">
                            <h2>R$</h2>
                            <h4>50,00</h4>
                        </div>
                    </div>

                    <div className="col-md-2 mt-2">
                        <div className="prices">
                            <h2>R$</h2>
                            <h4>50,00</h4>
                        </div>
                    </div>

                    <div className="col-md-2 mt-2">
                        <div className="prices">
                            <h2>R$</h2>
                            <h4>50,00</h4>
                        </div>
                    </div>

                    <div className="col-md-2 mt-2">
                        <div className="prices">
                            <h2>R$</h2>
                            <h4>50,00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
