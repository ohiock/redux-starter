import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import App from './components/App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />,
  </Provider>,
  document.getElementById('app')
);
