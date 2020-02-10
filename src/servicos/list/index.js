import React from 'react';

import './styles.css';
import Menu from './../../shared/menu';
import MenuList from './../../components/MenuList/MenuList';

export default function ServiceList() {
  return (
        <>
            <Menu/>
            
            <div className="container mt-3">
                <hr className="bg-primary"/>
                
                <div className="row mt-5">
                    <div className="col-md-4 offset-2 pull-left">
                        <h4>LISTA DE SERVIÇOS</h4>
                    </div>

                    <div className="col-md-4 pull-right">     
                        <a href="/meus-servicos/adicionar">
                            <button className="btn btn-secondary-inverse pull-right">
                                <i className="fa fa-plus"></i>
                                &nbsp;Incluir seus serviços
                            </button>
                        </a>                                           
                    </div>
                </div>

                <div className="row">
                    <MenuList />

                    <div className="col-md-6">
                        <div className="row">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="pull-left">
                                            <img src="/assets/img/unha.png" alt="" className="img-responsive list-img"/>
                                            &nbsp;&nbsp;Maquiagem
                                        </td>
                                        <td className="pr-0" style={{ width: 20 }}><i className="fa fa-edit fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                        <td className="pl-0"><i className="fa fa-trash fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                    </tr>

                                    <tr>
                                        <td className="pull-left">
                                            <img src="/assets/img/unha.png" alt="" className="img-responsive list-img"/>
                                            &nbsp;&nbsp;Maquiagem
                                        </td>
                                        <td className="pr-0" style={{ width: 20 }}><i className="fa fa-edit fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                        <td className="pl-0"><i className="fa fa-trash fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="pull-left">
                                            <img src="/assets/img/unha.png" alt="" className="img-responsive list-img"/>
                                            &nbsp;&nbsp;Maquiagem
                                        </td>
                                        <td className="pr-0" style={{ width: 20 }}><i className="fa fa-edit fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                        <td className="pl-0"><i className="fa fa-trash fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                    </tr>

                                    <tr>
                                        <td className="pull-left">
                                            <img src="/assets/img/unha.png" alt="" className="img-responsive list-img"/>
                                            &nbsp;&nbsp;Maquiagem
                                        </td>
                                        <td className="pr-0" style={{ width: 20 }}><i className="fa fa-edit fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                        <td className="pl-0"><i className="fa fa-trash fa-2x" style={{ paddingTop: 20, paddingBottom: 20 }}></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}