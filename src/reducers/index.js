import { combineReducers } from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer'
import userRegisterationReducer from './userRegistrationReducer'
import storyReducer from './storyReducer'
import nearByCafeReducer from './nearByCafeReducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  splashReducer: splashReducer,
  userRegisterationReducer: userRegisterationReducer,
  storyReducer: storyReducer,
  nearByCafeReducer: nearByCafeReducer
});

export default rootReducer;