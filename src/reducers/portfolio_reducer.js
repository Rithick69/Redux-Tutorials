const initialData = {
	name: '',
	image: '',
	servicesData: [],
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
		case 'GET_SERVICES':
			return {
				...state,
				servicesData: action.payload,
			};
		default:
			return state;
	}
};

export default portFolioReducer;
