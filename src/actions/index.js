// Declaring the Increment/Decrement actions. What the actions will do.

// # For Increment / Decrement Counter <----------
export const incNum = (num) => {
	return {
		type: 'INCREMENT',
		payload: num,
	};
};

export const decNum = (num) => {
	return {
		type: 'DECREMENT',
		payload: num,
	};
};

// <----------------------------------------------

// # For ToDo App <-------------------------------

// Action for adding item.

export const addTodo = (data) => {
	return {
		type: 'ADD_ITEM',
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
		type: 'DELETE_ITEM',
		id,
	};
};

export const editTodo = (id, data) => {
	return {
		type: 'EDIT_ITEM',
		id,
		data,
	};
};

// Action for remove all items.

export const removeTodo = () => {
	return {
		type: 'REMOVE_ITEMS',
	};
};

// Action for checked items.

export const checkedTodo = (id, status) => {
	return {
		type: 'CHECKED_ITEM',
		id,
		status,
	};
};

// # For MovieDb App <-------------------------------

export const searchQuery = (data) => {
	return {
		type: 'QUERY',
		payload: {
			query: data,
		},
	};
};

export const loadingStatus = (data) => {
	return {
		type: 'SET_LOADING',
		payload: {
			status: data,
		},
	};
};

export const errorMsg = (data) => {
	return {
		type: 'SET_ERROR',
		payload: {
			error: data,
		},
	};
};

export const fetchData = (data) => {
	return {
		type: 'SET_MOVIES',
		payload: {
			data: data,
		},
	};
};

// # For PortFolio App <-------------------------------

export const homeHero = (data) => {
	return {
		type: 'HOME_PAGE',
		payload: {
			name: data.name,
			image: data.image,
		},
	};
};

export const aboutHero = (data) => {
	return {
		type: 'ABOUT_PAGE',
		payload: {
			name: data.name,
			image: data.image,
		},
	};
};
