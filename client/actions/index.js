import Types from './types';

const incrementCounterRequest = () => ({
  type: Types.INCREMENT_COUNTER_REQUEST
});

const incrementCounterReceive = () => ({
  type: Types.INCREMENT_COUNTER_RECEIVE
});

export {
  incrementCounterRequest,
  incrementCounterReceive
};
