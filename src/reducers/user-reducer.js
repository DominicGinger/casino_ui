import { UserActions } from '../actions.js';

const { NEW_USER, NAME_CHANGE, CASH_CHANGE, VALIDATE } = UserActions;

const initState = {
  name: "",
  cash: 10000,
  validated: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case NAME_CHANGE:
      return Object.assign({}, state, { name: action.value});
    case CASH_CHANGE:
      return Object.assign({}, state, { cash: action.value});
    case VALIDATE:
      return Object.assign({}, state, { validated: true, valid: action.value.valid, message: action.value.message });
    default:
      return state;
  }
}
