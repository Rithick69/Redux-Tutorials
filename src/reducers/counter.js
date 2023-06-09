// Defining the Incre/Decrement actions. How to perform the actions using reducers.

// Defining the initial state.
const initialState = 0;

// Redux recommends to use initial state and actions while defining the reducer funcs.

const changeTheNum = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state === 0 ? 0 : state - action.payload;
		default:
			return state;
	}
};

// This reducer is global and can be used in other components.

export default changeTheNum;
