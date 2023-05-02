// creating store.
import { legacy_createStore } from "redux";

// Adding the actions and RootReducer into store to start performing the action.

import rootReducer from "./reducers/index";

const store = legacy_createStore(
	rootReducer,
	/* preloadedState,*/
	/* Adding Redux Extension to track store, through redux console. */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// Store serves as a centralised container which is used
// to manage the state of data and access them at different component
// levels in the whole application.
