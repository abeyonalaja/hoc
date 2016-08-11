import { combineReducers } from 'redux';
import authenticationReducer fromn './authentication'

const rootReducer = combineReducers({
  authenticated : authenticationReducer
});

export default rootReducer;
