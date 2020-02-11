import React from 'react';

import './styles.css';
import Menu from '../../shared/menu';
import MenuList from '../../components/MenuList/MenuList';

export default function Payments() {
    return (
        <>
            <Menu/>

            <div className="container mt-3">
                <hr className="bg-primary"/>

                <div className="row mt-5">
                    <MenuList active="payment"/>

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 style={{ fontWeight: 'bold' }}>SALDO</h4>
                            </div>
                            
                            <div className="col-md-8">
                                <div className="payment-value pull-right">
                                    <h4>R$ 450,00</h4>
                                    <button className="btn btn-secondary-inverse payment-btn">Resgatar valor</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h4 style={{ fontWeight: 'bold' }}>À RECEBER</h4>
                            </div>

                            <div className="col-md-6 pr-0">
                                <div className="payment-receive pull-right">
                                    <h4>R$ 150,00</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <h3 className="font-primary text-left">Extrato</h3>
                            </div>

                            <div className="col-md-12 text-left">
                                <table className="table table-borderless payment-table">
                                    <thead>
                                        <tr>
                                            <th><h4><strong>Serviço</strong></h4></th>
                                            <th><h4><strong>Data</strong></h4></th>
                                            <th><h4><strong>Valor</strong></h4></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Maquiagem com cílios</td>
                                            <td>22/05/2020</td>
                                            <td>+ R$ 50,00</td>
                                        </tr>

                                        <tr>
                                            <td>Manicure</td>
                                            <td>13/05/2020</td>
                                            <td>+ R$ 50,00</td>
                                        </tr>

                                        <tr>
                                            <td>Resgate de Saldo</td>
                                            <td>10/05/2020</td>
                                            <td className="font-red">- R$ 50,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}