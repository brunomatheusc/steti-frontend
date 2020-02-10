import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './../home/index';
import Plans from './../plans/index';
import Services from './../servicos/index';
import Professional from '../professional';
import ServiceList from './../servicos/list/index';
import ServiceNew from './../servicos/new/index';
import Orders from '../orders';
import Payments from './../payments/index';
import Login from './../login/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>{ Home }</Route>
                <Route path="/login">{ Login }</Route>
                <Route path="/meus-pedidos" exact>{ Orders }</Route>
                <Route path="/meus-servicos" exact>{ ServiceList }</Route>
                <Route path="/meus-servicos/adicionar">{ ServiceNew }</Route>
                <Route path="/pagamentos">{ Payments }</Route>
                <Route path="/planos">{ Plans }</Route>
                <Route path="/servicos/:serviceType?">{ Services }</Route>
                <Route path="/professional/:professionalId?">{ Professional }</Route>
            </Switch>
        </BrowserRouter>
    );
}