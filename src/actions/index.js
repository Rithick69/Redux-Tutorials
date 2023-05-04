// Declaring the Increment/Decrement actions. What the actions will do.

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
