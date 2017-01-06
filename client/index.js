import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

import routes from './routes';
import App from './components/App';

const root = document.getElementById('app');

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => (
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
);

render(renderApp(), root);
