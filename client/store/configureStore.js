import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import counterWatcher from '../sagas/counterSaga';

export default function configureStore(initialState) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    const createLoggerMiddleware = require('redux-logger');
    const loggerMiddleware = createLoggerMiddleware();

    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(counterWatcher);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
