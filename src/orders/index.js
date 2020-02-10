import React from 'react';

import './styles.css';
import MenuList from '../components/MenuList/MenuList';
import Menu from './../shared/menu';
import Breadcumb from './../shared/breadcumb';

export default function Orders() {
    return (
        <>
            <Menu/>

            <div className="container mt-3">
                <hr className="bg-primary"/>
  
                <div className="row mt-5">
                    <div className="col-md-8 offset-3">
                        <Breadcumb breadcumbs={ [ "EM ANÁLISE", "ACEITOS" ] } />
                    </div>
                </div>

                <div className="row">
                    <MenuList active="orders"/>

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="order-profile">
                                    <img src="/assets/img/profiles/sheila.png" className="img-responsive"/>
                                    <span>Cláudia</span>
                                </div>
                            </div>

                            <div className="col-md-3 order-header">
                                <div className="order-title">
                                    <h6>Maquiagem com cílios</h6>
                                </div>

                                <div className="order-date">
                                    <span>10/06 • 18:00</span>
                                </div>
                            </div>

                            <div className="col-md-5 order-header">
                                <p className="text-left">
                                    Maquiagem elaborada para festas com cílios postiços.
                                    Uso produtos de alta qualidade.
                                </p>
                            </div>

                            <div className="col-md-2 order-header">
                                <div className="order-options">
                                    <a href="#" className="font-primary"><i className="fa fa-check fa-2x pr-2"></i></a>
                                    
                                    <a href="#" className="font-primary"><i className="fa fa-close fa-2x"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-2">
                                <div className="order-profile">
                                    <img src="/assets/img/profiles/sheila.png" className="img-responsive"/>
                                    <span>Cláudia</span>
                                </div>
                            </div>

                            <div className="col-md-3 order-header">
                                <div className="order-title">
                                    <h6>Maquiagem com cílios</h6>
                                </div>

                                <div className="order-date">
                                    <span>10/06 • 18:00</span>
                                </div>
                            </div>

                            <div className="col-md-5 order-header">
                                <p className="text-left">
                                    Maquiagem elaborada para festas com cílios postiços.
                                    Uso produtos de alta qualidade.
                                </p>
                            </div>

                            <div className="col-md-2 order-header">
                                <div className="order-options">
                                    <a href="#" className="font-primary"><i className="fa fa-check fa-2x pr-2"></i></a>
                                    
                                    <a href="#" className="font-primary"><i className="fa fa-close fa-2x"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-2">
                                <div className="order-profile">
                                    <img src="/assets/img/profiles/sheila.png" className="img-responsive"/>
                                    <span>Cláudia</span>
                                </div>
                            </div>

                            <div className="col-md-3 order-header">
                                <div className="order-title">
                                    <h6>Maquiagem com cílios</h6>
                                </div>

                                <div className="order-date">
                                    <span>10/06 • 18:00</span>
                                </div>
                            </div>

                            <div className="col-md-5 order-header">
                                <p className="text-left">
                                    Maquiagem elaborada para festas com cílios postiços.
                                    Uso produtos de alta qualidade.
                                </p>
                            </div>

                            <div className="col-md-2 order-header">
                                <div className="order-options">
                                    <a href="#" className="font-primary"><i className="fa fa-check fa-2x pr-2"></i></a>
                                    
                                    <a href="#" className="font-primary"><i className="fa fa-close fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
