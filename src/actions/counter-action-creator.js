import { CounterActions } from '../actions.js';

export default dispatch => ({
  increment: () => dispatch({type: CounterActions.INCREMENT}),
  decrement: () => dispatch({type: CounterActions.DECREMENT})
});
