import { combineReducers } from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer'
import storyReducer from './storyReducer'
import nearByCafeReducer from './nearByCafeReducer'
import coffeePediaReducer from './coffeePediaReducer'
import locationReducer from './locationreducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  splashReducer: splashReducer,
  storyReducer: storyReducer,
  nearByCafeReducer: nearByCafeReducer,
  coffeePediaReducer: coffeePediaReducer,
  locationReducer: locationReducer
});

export default rootReducer;