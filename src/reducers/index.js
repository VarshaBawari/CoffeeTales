import { combineReducers } from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer'
import storyReducer from './storyReducer'
import nearByCafeReducer from './nearByCafeReducer'
import coffeePediaReducer from './coffeePediaReducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  splashReducer: splashReducer,
  storyReducer: storyReducer,
  nearByCafeReducer: nearByCafeReducer,
  coffeePediaReducer: coffeePediaReducer
});

export default rootReducer;