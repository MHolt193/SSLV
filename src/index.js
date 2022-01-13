import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//REACT_ROUTER
import { Router, browserHistory } from 'react-router';
import routes from './routes'





ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

