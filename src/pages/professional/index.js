import React from 'react';

import './styles.css';
import Menu from '../../shared/menu';
import Breadcumb from '../../shared/breadcumb';

export default function Professional() {
    return (
        <>
            <Menu/>
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8 offset-3">
                        <Breadcumb breadcumbs={ [ "UNHA", "MANICURE", "SHEILA" ] } />
                    </div>

                    <div className="col-md-8 offset-3">
                        <div className="row">
                            <div className="professional">
                                <div className="col-md-2">
                                    <img src="/assets/img/profiles/sheila.png" className="img-responsive pull-left"/>
                                </div>

                                <div className="col-md-8" style={{ marginLeft: 25 }}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="pull-left font-primary">Manicure</h4>
                                        </div>

                                        <div className="col-md-12">
                                            <span>
                                                Estou no mercado há 5 anos, fiz um curso no instituto Embelleze.
                                                Atualmente estou cursando Estética e já trabalhei em grandes salões do mercado.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="pull-left">Sheila</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="pull-left font-primary">Descrição do serviço</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <span className="pull-left text-justify">
                                    Faço manicure e pedicure, nos meus serviços estão inclusos massagem nos pés,
                                    esmaltação, cutilagem e beleza para suas unhas.
                                </span>
                            </div>

                            <div className="col-md-3">
                                <div className="value">
                                    <h4>Valor</h4>
                                    <h6>R$ 18,00</h6>
                                    <h6>ou 180 pontos</h6>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="pull-left font-primary">Fotos</h3>
                            </div>

                            <div className="col-md-2 pl-0">
                                <img src="/assets/img/services/nail.png" className="img-responsive service-photo"/>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/services/nail-2.png" className="img-responsive service-photo"/>
                            </div>

                            <div className="col-md-2">
                                <img src="/assets/img/services/nail-3.png" className="img-responsive service-photo"/>
                            </div>                            
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h3 className="pull-left font-primary">Avaliação</h3>
                            </div>

                            <div className="col-md-12">
                                <h4 className="pull-left"><i className="fa fa-star fa-professional"></i>&nbsp;4.9</h4>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h3 className="pull-left font-primary">Comentários</h3>
                            </div>

                            <div className="col-md-12">
                                <ul id="comments">
                                    <li className="text-left"><span>Maravilhosa, melhor manicure</span></li>
                                    <li className="text-left"><span>Super pontual e atenciosa</span></li>
                                    <li className="text-left"><span>Usa produtos de qualidade e a higine é impecável</span></li>
                                    <li className="text-left"><span>Ótima profissional</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
