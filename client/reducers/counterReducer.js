import { createReducer } from 'redux-act';

import { increment } from '../actions/counterAction';

const initialState = {
  counter: 0,
};

const counterReducer = createReducer({
  [increment]: state => ({ counter: state.counter + 1 }),
}, initialState);

export default counterReducer;
