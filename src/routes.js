import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Components/Home/Home'
import Catagories from './Components/Catagories/Catagories'
import TvShows from './Components/TV Shows/TvShows'
import Movies from './Components/Movies/Movies'

export default (
    <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/Catagories' component={Catagories} />
        <Route path='/tv' component={TvShows} />
        <Route path='/movies' component={Movies} />
    </Route>
)