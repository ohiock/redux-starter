import { call, put } from 'redux-saga/effects';
import { delay, takeEvery } from 'redux-saga';

import { increment, incrementAsync } from '../actions/counterAction';

function* counterWorker() {
  yield call(delay, 2000);
  yield put(increment());
}

function* counterWatcher() {
  yield takeEvery(`${incrementAsync}`, counterWorker);
}

export default counterWatcher;
