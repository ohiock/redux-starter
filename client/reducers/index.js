import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterState: counterReducer,
  routing: routerReducer
});

export default rootReducer;
