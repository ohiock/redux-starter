import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  // need supply an example reducer here
  routing: routerReducer
});

export default rootReducer;
