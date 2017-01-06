import { take, call } from 'redux-saga/effects';

import { incrementCounter } from '../actions';
import Types from '../actions/types';

function* watchCounter() {
  while (true) {
    yield take(Types.INCREMENT_COUNTER_REQUEST);

    call(counterWorker);
  }
};

function* counterWorker() {
  put(Types.INCREMENT_COUNTER_REQUEST);
};
