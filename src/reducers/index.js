// We can only export one Root Reducer to store.
// All other reducers which we create will now be imported to this
// Root Reducer and will be used as and when required.

import changeTheNum from './counter';

// Combining multiple Reducers into one Root using Redux.

import { combineReducers } from 'redux';

// For todo app.
import todoReducer from './todo_reducer';

// For MovieDb app.

import movieDbReducer from './movieDb_reducer';

// For PortFolio app.

import portFolioReducer from './portfolio_reducer';

const rootReducer = combineReducers({
	changeTheNum,
	todoReducer,
	movieDbReducer,
	portFolioReducer,
	// Add other reducers here.
});

export default rootReducer;
