import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
import counterWatcher from '../sagas/counterSaga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  );

  sagaMiddleware.run(counterWatcher);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
