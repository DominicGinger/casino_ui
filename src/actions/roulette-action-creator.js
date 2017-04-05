import { RouletteActions } from '../actions.js';

export default dispatch => ({
  spin: speed => () => dispatch({ type: RouletteActions.SPIN, speed })
});
