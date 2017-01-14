import { createAction } from 'redux-act';

export const increment = createAction('increment');
export const incrementAsync = createAction('increment async');
export const incrementIfOdd = createAction('increment if odd');
export const decrement = createAction('decrement');
