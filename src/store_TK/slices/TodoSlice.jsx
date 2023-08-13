import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	return data;
});

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		isLoading: false,
		data: null,
		isError: false,
	},
	extraReducers: (builder) => {
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

export default todoSlice.reducer;
