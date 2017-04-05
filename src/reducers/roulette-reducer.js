import { RouletteActions } from '../actions.js';

const initState = {
  speed: 4,
  disabled: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case RouletteActions.SPIN:
      return { speed: action.speed, disabled: !state.disabled };
    default:
      return state;
  }
}
