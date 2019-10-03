import { combineReducers } from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer'
import userRegisterationReducer from './userRegistrationReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  splashReducer: splashReducer,
  userRegisterationReducer: userRegisterationReducer,
  dataReducer: dataReducer
});

export default rootReducer;