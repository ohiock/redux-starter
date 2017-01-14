import { fork } from 'redux-saga';

import counter from './counterSaga';

function* rootSaga() {
  yield fork(counter);
}

export default rootSaga;
