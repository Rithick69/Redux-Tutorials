// We can only export one Root Reducer to store.
// All other reducers which we create will now be imported to this
// Root Reducer and will be used as and when required.

import changeTheNum from "./counter";

// Combining multiple Reducers into one Root using Redux.

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	changeTheNum,
	// Add other reducers here.
});

export default rootReducer;
