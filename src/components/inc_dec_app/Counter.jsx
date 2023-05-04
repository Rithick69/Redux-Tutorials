import React from "react";
// In Redux we have useSelector as opposed to useContext hooks of React.

import { useSelector, useDispatch } from "react-redux";
import { Add, Delete } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";

// importing actions.

import { incNum, decNum } from "../../actions";
import "./index.css";

const Counter = () => {
	// Once we provide the App component the store data as props,
	// Any child component can access store with the help of useSelector.
	const myState = useSelector((state) => state.changeTheNum);
	const dispatch = useDispatch();
	return (
		<>
			<div className="container">
				<div className="heading">
					<h1>Increment/Decrement Counter</h1>
					<h3>using React and Redux</h3>
				</div>
				<div className="main_div">
					<div className="center_hooks_div">
						<br />
						<h1 className="number">{myState}</h1>
						<div className="btn_div">
							<Tooltip title="Increment">
								<Button
									className="buttons btn_green"
									onClick={() => {
										// Calling the action using dispatch.
										// We can specify the num by which we want to increment the value. For example 5.
										dispatch(incNum(5));
									}}
								>
									{/* Material UI Component */}
									<Add />
								</Button>
							</Tooltip>
							<Tooltip title="Decrement">
								<Button
									className="buttons btn_red"
									onClick={() => {
										// Calling the action using dispatch.
										dispatch(decNum(5));
									}}
								>
									<Delete />
								</Button>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Counter;
