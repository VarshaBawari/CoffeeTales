// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import splashReducer from './splashReducer'
import userRegisterationReducer from './userRegistrationReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  splashReducer: splashReducer,
  userRegisterationReducer: userRegisterationReducer
});

// Exports
export default rootReducer;