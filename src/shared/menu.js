import React from 'react';

export default function Menu() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 offset-1">
                            <a href="/"><img src="/assets/img/logo-1.jpg" className="img-responsive center logo"/></a>                            
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul id="howItWorks" className="pull-right">
                                        <li><a href="#" className="text-uppercase text-underline"><strong>Como funciona</strong></a></li>
                                        <li><a href="#" className="text-uppercase text-underline"><strong>Planos</strong></a></li>
                                        <li><a href=""><button className="btn btn-primary">Quero ser um profissional</button></a></li>
                                        <li><img src="/assets/img/logo-3.png" alt="" className="img-responsive logo"/></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row" style={{ margin: '-3%'}}>
                                <div className="col-md-12">
                                    <ul className="nav" id="services" style={{ justifyContent: 'center' }}>
                                        <li><a href="/servicos/unha" className="text-uppercase"><strong>Unha</strong></a></li>
                                        <li><a href="/servicos/maquiagem" className="text-uppercase"><strong>Maquiagem</strong></a></li>
                                        <li><a href="/servicos/cabelo" className="text-uppercase"><strong>Cabelo</strong></a></li>
                                        <li><a href="/servicos/depilacao" className="text-uppercase"><strong>Depilação</strong></a></li>
                                        <li><a href="/servicos/massagem" className="text-uppercase"><strong>Massagem</strong></a></li>
                                        <li><a href="/servicos/estetica" className="text-uppercase"><strong>Serviços Estéticos</strong></a></li>
                                        <li className="last-child"><a href="/servicos/barbearia" className="text-uppercase"><strong>Barbearia</strong></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
       </>
    );
}