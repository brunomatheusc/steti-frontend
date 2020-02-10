import React from 'react';

import './MenuList.css';

export default function MenuList(props) {
    console.log(props);

    return (
        <>
            <div className="col-md-2 mr-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/meus-servicos"><button className={ "btn btn-menu" + ((props.active == "services") ? " btn-active" : " btn-secondary-inverse") }><strong>MEUS SERVIÇOS</strong></button></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/meus-pedidos"><button className={ "btn btn-menu" + ((props.active == "orders") ? " btn-active" : " btn-secondary-inverse") }><strong>MEUS PEDIDOS</strong></button></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/agenda"><button className={ "btn btn-menu" + ((props.active == "calendar") ? " btn-active" : " btn-secondary-inverse")} ><strong>AGENDA</strong></button></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/pagamentos"><button className={ "btn btn-menu" + ((props.active == "payment") ? " btn-active" : " btn-secondary-inverse")} ><strong>PAGAMENTOS</strong></button></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/dicas"><button className={ "btn btn-menu" + ((props.active == "") ? " btn-active" : " btn-secondary-inverse")} ><strong>DICAS</strong></button></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href="/avaliacao"><button className={ "btn btn-menu" + ((props.active == "") ? " btn-active" : " btn-secondary-inverse")} ><strong>AVALIAÇÃO</strong></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}