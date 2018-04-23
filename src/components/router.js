import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/home-screen';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
