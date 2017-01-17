import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/containers/Home/HomePage';
import CounterPage from './components/containers/Counter/CounterPage';
import NotFoundPage from './components/containers/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="counter" component={CounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
