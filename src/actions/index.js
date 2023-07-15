// Declaring the Increment/Decrement actions. What the actions will do.

// # For Increment / Decrement Counter <----------
export const incNum = (num) => {
	return {
		type: "INCREMENT",
		payload: num,
	};
};

export const decNum = (num) => {
	return {
		type: "DECREMENT",
		payload: num,
	};
};

// <----------------------------------------------

// # For ToDo App <-------------------------------

// Action for adding item.

export const addTodo = (data) => {
	return {
		type: "ADD_ITEM",
		payload: {
			id: new Date().getTime().toString(),
			data: data,
			status: false,
		},
	};
};

// Action for delete item.

export const deleteTodo = (id) => {
	return {
		type: "DELETE_ITEM",
		id,
	};
};

export const editTodo = (id, data) => {
	return {
		type: "EDIT_ITEM",
		id,
		data,
	};
};

// Action for remove all items.

export const removeTodo = () => {
	return {
		type: "REMOVE_ITEMS",
	};
};

// Action for checked items.

export const checkedTodo = (id, status) => {
	return {
		type: "CHECKED_ITEM",
		id,
		status,
	};
};

// # For MovieDb App <-------------------------------

export const searchQuery = (data) => {
	return {
		type: "QUERY",
		payload: {
			query: data,
		},
	};
};

export const setLoading = (data) => {
	return {
		type: "SET_LOADING",
		payload: {
			status: data,
		},
	};
};

export const setError = (data) => {
	return {
		type: "SET_ERROR",
		payload: {
			error: data,
		},
	};
};

export const setMovies = (data) => {
	return {
		type: "SET_MOVIES",
		payload: {
			data: data,
		},
	};
};