import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Components/Home'

export default (
    <Route path='/' component={App} >
        <IndexRoute component={props => <Home apiResults='' {...props}/>} />
    </Route>
)