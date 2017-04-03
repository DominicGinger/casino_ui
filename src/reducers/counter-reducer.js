import { CounterActions } from '../actions.js';

export default (state = 0, action) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return state + 1;
    case CounterActions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
