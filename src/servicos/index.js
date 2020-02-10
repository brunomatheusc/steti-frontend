import React, { useState, useEffect } from 'react';

import './styles.css';
import Menu from '../shared/menu';
import Footer from '../shared/footer';
import Breadcumb from '../shared/breadcumb';

export default function Services() {
    // const [ serviceType, setServiceType ] = useState('unha');

    // useEffect(() => {
    // }, [])

    return (
        <>
            <Menu/>
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8 offset-3">
                        <Breadcumb breadcumbs={ [ "UNHA", "MANICURE" ] } />
                    </div>

                    <div className="col-md-8 offset-3">
                        <table className="table table-borderless">
                            <tbody id="table-services">
                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/sheila.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Sheila</h6>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </td>

                                    <td className="pull-left pl-0">
                                        <span>
                                            Faço manicure e pedicure, nos meus serviços estão inclusos massagens nos pés,
                                            esmaltação, cutilagem e beleza para suas unhas.
                                        </span>
                                    </td>

                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>

                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/anna.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Anna</h6>
                                                </div>
                                            </div>                                        
                                        </div>

                                    </td>
                                    
                                    <td className="pull-left pl-0"><span>Faço manicure e pedicure</span></td>
                                    
                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>

                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/sheila.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Vanessa</h6>
                                                </div>
                                            </div>                                        
                                        </div>

                                    </td>
                                    
                                    <td className="pull-left pl-0"><span>Faço manicure e pedicure</span></td>
                                    
                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>

                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/sheila.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Roberta</h6>
                                                </div>
                                            </div>                                        
                                        </div>

                                    </td>
                                    
                                    <td className="pull-left pl-0"><span>Faço manicure e pedicure</span></td>
                                    
                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>

                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/sheila.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Renata</h6>
                                                </div>
                                            </div>                                        
                                        </div>

                                    </td>
                                    
                                    <td className="pull-left pl-0"><span>Faço manicure e pedicure</span></td>
                                    
                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>

                                <tr className="border-bottom" onClick={ () => { window.location.href = '/professional/12' }}>
                                    <td style={{ width: 175, paddingRight: 0 }}>
                                        <div className="row">
                                            <div className="col-md-6" style={{ paddingRight: 0, paddingBottom: 12 }}>
                                                <div className="profile">
                                                    <img src="/assets/img/profiles/sheila.png" alt="" className="profile-service"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ margin: 'auto auto auto 0', paddingLeft: 0 }}>
                                                <div className="name">
                                                    <h6>Bianca</h6>
                                                </div>
                                            </div>                                        
                                        </div>

                                    </td>
                                    
                                    <td className="pull-left pl-0"><span>Faço manicure e pedicure</span></td>
                                    
                                    <td className="pull-left" style={{ paddingLeft: 35 }}><h5>R$ 18,00</h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
