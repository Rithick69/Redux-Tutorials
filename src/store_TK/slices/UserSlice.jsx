import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		addUser(state, action) {
			state.push(action.payload);
		},
		removeUser(state, action) {},
		clearAll(state, action) {},
	},
});

// We need to export action creators to be able to dispatch data to
// the required reducers

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
