import { take, call, put, takeEvery } from 'redux-saga/effects';

import { increment } from '../actions/counterAction';

function* counterWatcher() {
  while (true) {
    yield takeEvery(`${increment}`, counterWorker);
  }
};

function* counterWorker() {
  yield call(delay, 1000);
  yield put(increment());
};

export default counterWatcher;
