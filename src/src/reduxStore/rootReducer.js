// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import splashReducer from '../screens/splash/redux/reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    splashReducer: splashReducer
});

// Exports
export default rootReducer;