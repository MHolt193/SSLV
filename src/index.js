import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//REACT_ROUTER
import { Router, browserHistory } from 'react-router';
import routes from './routes'
//REDUX
import { Provider} from 'react-redux'
import store from './Components/redux/Store'




ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

