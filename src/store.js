// creating store.
import { legacy_createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';

// Adding the actions and RootReducer into store to start performing the action.

import rootReducer from "./reducers/index";

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = legacy_createStore(
	persistedReducer,
	/* preloadedState,*/
	/* Adding Redux Extension to track store, through redux console. */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;

// Store serves as a centralised container which is used
// to manage the state of data and access them at different component
// levels in the whole application.
