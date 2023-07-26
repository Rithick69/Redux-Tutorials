const initialData = {
	name: '',
	image: '',
};

const portFolioReducer = (state = initialData, action) => {
	switch (action.type) {
		case 'HOME_PAGE':
			return {
				...state,
				name: action.payload.name,
				image: action.payload.image,
			};
		case 'ABOUT_PAGE':
			return {
				...state,
				name: action.payload.name,
				image: action.payload.image,
			};
		default:
			return state;
	}
};

export default portFolioReducer;
