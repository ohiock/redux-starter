import { takeEvery, delay } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';

import counterWatcher from './counterSaga';

function* rootSaga() {
  yield [
    counterWatcher
  ];
};

export default rootSaga;
