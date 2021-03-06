// Imports: Dependencies
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// Imports: Redux
import rootReducer from '../reducers';
// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];
// Middleware: Redux Persist Config
const persistConfig = {
    // Root?
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
        'authReducer',
        'userRegisterationReducer',
        'storyReducer',
        'nearByCafeReducer',
        'coffeePediaReducer',
        'locationreducer'
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
    ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
    store,
    persistor,
};