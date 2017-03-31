import { UserActions } from '../actions.js';
import userValidator from '../services/userValidator.js';

const { NEW_USER, NAME_CHANGE, CASH_CHANGE, VALIDATE } = UserActions;

export default dispatch => ({
  nameChange: name => dispatch({type: NAME_CHANGE, value: name }),
  cashChange: cash => dispatch({type: CASH_CHANGE, value: cash }),
  validate: ({ name, cash }) => dispatch({ type: VALIDATE, value: userValidator(name, cash) })
});
