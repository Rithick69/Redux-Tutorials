const initialData = {
	movies: [],
	query: "",
	isError: {
		show: false,
		msg: ""
	},
	isLoading: false
};

const movieDbReducer = (state = initialData, action) => {
	switch (action.type) {
		case "QUERY":
			const { query } = action.payload;
			return {
				...state,
				query: query
			};
		case "SET_LOADING":
			const { status } = action.payload;
			return {
				...state,
				isLoading: status,
			};
		case "SET_ERROR":
			const { error } = action.payload;
			return {
				...state,
				isError: error,
			};
		case "SET_MOVIES":
			const { data } = action.payload;
			return {
				...state,
				movies: data,
			};
		default:
			return state;
	}
};

export default movieDbReducer;
