import './styles/App.scss';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MenuNavContainer from './MenuNavContainer';
import { Home } from './Home';
import About from './About';

render(

    <HashRouter>
        <MenuNavContainer>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/about" component={About} />
            </Switch>
        </MenuNavContainer>
    </HashRouter>,
    document.getElementById('root'),
);
