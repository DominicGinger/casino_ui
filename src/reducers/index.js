import { combineReducers } from 'redux';

import countReducer from './count-reducer.js';

export default combineReducers({
  count: countReducer
});
