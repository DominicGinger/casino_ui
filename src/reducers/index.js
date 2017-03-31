import { combineReducers } from 'redux';

import countReducer from './count-reducer.js';
import userReducer from './user-reducer.js';

export default combineReducers({
  count: countReducer,
  user: userReducer
});
