import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { watchCounter } from './counterSaga';

function* rootSaga() {
  yield [
    fork(watchCounter)
  ];
};

export default rootSaga;
