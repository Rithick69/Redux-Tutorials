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
