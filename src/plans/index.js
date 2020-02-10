import React from 'react';

import './styles.css';
import Menu from '../shared/menu';
import Footer from '../shared/footer';

export default function Plans() {
    return (
        <>
            <Menu/>
            
            <div className="container">
                <hr className="bg-primary"/>

                <div className="row mt-4">
                    <div className="col-md-8 offset-3">
                        <h4 className="pull-left">PLANOS</h4>
                    </div>
                    
                    <div className="col-md-8 offset-3">
                        <p className="pull-left">Recarregue seus créditos e <strong>contrate já um profissional de beleza e estética.</strong></p>
                    </div>

                    <div className="col-md-10 offset-2 mt-4 mb-4">
                        <div className="row">
                            <div className="col-md-2">
                                <img src="/assets/img/unha.png" alt="" className="img-plan"/>

                                <div className="price">
                                    <h6>R$ 50,00</h6>                                    
                                </div>

                                <button className="btn btn-primary-inverse form-control">Contratar já <i className="fa fa-arrow-right"></i></button>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/unha.png" alt="" className="img-plan"/>

                                <div className="price">
                                    <h6>R$ 150,00</h6>                                    
                                </div>

                                <button className="btn btn-primary-inverse form-control">Contratar já <i className="fa fa-arrow-right"></i></button>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/unha.png" alt="" className="img-plan"/>

                                <div className="price">
                                    <h6>R$ 250,00</h6>                                    
                                </div>

                                <button className="btn btn-primary-inverse form-control">Contratar já <i className="fa fa-arrow-right"></i></button>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/unha.png" alt="" className="img-plan"/>

                                <div className="price">
                                    <h6>R$ 350,00</h6>                                    
                                </div>

                                <button className="btn btn-primary-inverse form-control">Contratar já <i className="fa fa-arrow-right"></i></button>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/unha.png" alt="" className="img-plan"/>

                                <div className="price">
                                    <h6>R$ 500,00</h6>                                    
                                </div>

                                <button className="btn btn-primary-inverse form-control">Contratar já <i className="fa fa-arrow-right"></i></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
