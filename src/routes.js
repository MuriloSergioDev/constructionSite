import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Container } from './styles';

import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
            </Switch>
        </BrowserRouter>
    );
}
