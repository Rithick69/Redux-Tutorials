// Declaring the Increment/Decrement actions. What the actions will do.

export const incNum = () => {
	return {
		type: "INCREMENT",
	};
};

export const decNum = () => {
	return {
		type: "DECREMENT",
	};
};
