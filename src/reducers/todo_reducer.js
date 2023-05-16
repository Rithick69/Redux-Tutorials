const initialData = {
	list: [],
};

const todoReducer = (state = initialData, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const { id, data } = action.payload;

			return {
				list: [
					// Previously added items in the list array.
					...state.list,
					// new data being added.
					{
						id: id,
						data: data,
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

		default:
			return state;
	}
};

export default todoReducer;
