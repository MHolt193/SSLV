import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Components/Home/Home'
import Catagories from './Components/Catagories/Catagories'

export default (
    <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/Catagories' component={Catagories} />
    </Route>
)