import { delay, call, put, takeEvery } from 'redux-saga/effects';

import { increment } from '../actions/counterAction';

function* counterWorker() {
  yield call(delay, 1000);
  yield put(increment());
}

function* counterWatcher() {
  while (true) {
    yield takeEvery(`${increment}`, counterWorker);
  }
}

export default counterWatcher;
