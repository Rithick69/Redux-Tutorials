const initialData = {
	list: [],
};

const todoReducer = (state = initialData, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const { id, data, status } = action.payload;

			return {
				list: [
					// Previously added items in the list array.
					...state.list,
					// new data being added.
					{
						id: id,
						data: data,
						status: status,
					},
				],
			};
		case "DELETE_ITEM":
			const newList = state.list.filter((elem) => {
				return elem.id !== action.id;
			});
			return {
				list: newList,
			};
		case "EDIT_ITEM":
			const editedList = state.list.map((elem) => {
				if (elem.id === action.id) {
					return {
						...elem,
						data: action.data,
					};
				}
				return elem;
			});

			return {
				list: editedList,
			};
		case "CHECKED_ITEM":
			const updatedList = state.list.map((elem) => {
				if (elem.id === action.id) {
					return {
						...elem,
						status: action.status,
					};
				}
				return elem;
			});

			return {
				list: updatedList,
			};
		case "REMOVE_ITEMS":
			return {
				list: [],
			};

		default:
			return state;
	}
};

export default todoReducer;
