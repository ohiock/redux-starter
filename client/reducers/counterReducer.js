import Types from '../actions/types';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  count: 0
};

const incrementCounter = (state, action) => Object.assign(
  { },
  state,
  {
    count: state.count + 1
  }
);

const ACTION_HANDLERS = {
  [Types.INCREMENT_COUNTER]: incrementCounter
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
