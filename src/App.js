import React from "react";
// In Redux we have useSelector as opposed to useContext hooks of React.

import { useSelector, useDispatch } from "react-redux";

// importing actions.

import { incNum, decNum } from "./actions";

const App = () => {
	// Once we provide the components the store data,
	// we can easily get the data from store using useSelector.
	const myState = useSelector((state) => state.changeTheNum);
	const dispatch = useDispatch();
	return (
		<>
			<div className="container">
				<h1>Increment/Decement Counter</h1>
				<h4>using React and Redux</h4>
				<div className="quantity">
					<a
						className="quantity__minus"
						title="Decrement"
						onClick={() => {
							// Calling the action using dispatch.
							dispatch(decNum());
						}}
					>
						<span>➖</span>
					</a>
					<input
						type="text"
						name="quantity"
						className="quantity__input"
						value={myState}
					/>
					<a
						className="quantity__plus"
						title="Increment"
						onClick={() => {
							// Calling the action using dispatch.
							dispatch(incNum());
						}}
					>
						<span>➕</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default App;
