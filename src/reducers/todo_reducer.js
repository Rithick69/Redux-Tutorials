const initialData = {
	list: [],
};

const todoReducer = (state = initialData, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const { id, data } = action.payload;

			return {
				...state,
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
				elem.id !== action.id;
			});
			return {
				...state,
				list: newList,
			};

		default:
			return state;
	}
};

export default todoReducer;
