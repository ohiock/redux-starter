import counter from './counterSaga';

function* rootSaga() {
  yield [
    counter,
  ];
}

export default rootSaga;
