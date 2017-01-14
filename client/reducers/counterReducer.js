import { createReducer } from 'redux-act';

import { increment, incrementIfOdd, decrement } from '../actions/counterAction';

const initialState = {
  counter: 0,
};

const counterReducer = createReducer({
  [increment]: state => ({ counter: state.counter + 1 }),
  [incrementIfOdd]: state => (state.counter % 2 !== 0 ? state.counter + 1 : state.counter),
  [decrement]: state => state.counter - 1,
}, initialState);

export default counterReducer;
