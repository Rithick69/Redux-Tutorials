import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearAll } from '../actions';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	return data;
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoading: false,
		data: [],
		isError: false,
	},
	reducers: {
		// Redux Toolkit provides us with Immer.
		// Immer is a package that allows us to work with immutable state in
		// more convenient way.
		addUser(state, action) {
			state.data.push(action.payload);
		},
		removeUser(state, action) {
			state.data.splice(action.payload, 1);
		},
		// clearAll() {
		// 	// We don't want to assign [] to state we want to empty the initial
		// 	// state that's why we must return [] and not state = [].
		// 	return [];
		// },
	},
	// extraReducer won't be used in this Slice as we already have the clearAll reducer present here.
	// But suppose there were other slices which used the same reducer such as this slice then we will
	// use extraReducer.

	// Con: extraReducer won't work if the mentioned reducer is not present in the parent slice.
	// extraReducers(builder) {
	// 	builder.addCase(userSlice.actions.clearAll, () => {
	// 		return [];
	// 	});
	// },

	// Fix for the con of extraReducer.

	// Refer to this StackOverFLow query: https://stackoverflow.com/questions/66425645/what-is-difference-between-reducers-and-extrareducers-in-redux-toolkit/73794913#73794913

	extraReducers(builder) {
		// First param is action type and 2nd param is the reducer.
		builder.addCase(clearAll, () => {
			return {};
		});
		builder.addCase(fetchTodos.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchTodos.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			console.log('Error', action.payload);
		});
	},
});

// If action is supposed to be used by one reducer, use usual reducers.

// If action is supposed to be used by multiple reducers, use usual extraReducers.

// We need to export action creators to be able to dispatch data to
// the required reducers

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
