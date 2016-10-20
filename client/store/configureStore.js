import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [createSagaMiddleware];
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
