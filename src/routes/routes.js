import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/index';
import Plans from '../pages/plans/index';
import Services from './../servicos/index';
import Professional from '../pages/professional';
import ServiceList from './../servicos/list/index';
import ServiceNew from './../servicos/new/index';
import Orders from '../pages/orders';
import Payments from '../pages/payments/index';
import Login from '../pages/login/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/login" component={ Login }></Route>
                <Route path="/meus-pedidos" exact component={ Orders }></Route>
                <Route path="/meus-servicos" exact component={ ServiceList }></Route>
                <Route path="/meus-servicos/adicionar" component={ ServiceNew }></Route>
                <Route path="/pagamentos" component={ Payments }></Route>
                <Route path="/planos" component={ Plans }></Route>
                <Route path="/servicos/:serviceType?" component={ Services }></Route>
                <Route path="/professional/:professionalId?" component={ Professional }></Route>
            </Switch>
        </BrowserRouter>
    );
}