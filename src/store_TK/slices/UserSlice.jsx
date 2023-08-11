import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		// Redux Toolkit provides us with Immer.
		// Immer is a package that allows us to work with immutable state in
		// more convenient way.
		addUser(state, action) {
			state.push(action.payload);
		},
		removeUser(state, action) {
			state.splice(action.payload, 1);
		},
		clearAll() {
			// We don't want to assign [] to state we want to empty the initial
			// state that's why we must return [] and not state = [].
			return [];
		},
	},
});

// We need to export action creators to be able to dispatch data to
// the required reducers

export const { addUser, removeUser, clearAll } = userSlice.actions;

export default userSlice.reducer;
