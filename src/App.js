import React from "react";
// In Redux we have useSelector as opposed to useContext hooks of React.

import { useSelector, useDispatch } from "react-redux";
import { Add, Delete } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";

// importing actions.

import { incNum, decNum } from "./actions";
import "./App.css";

const App = () => {
	// Once we provide the components the store data,
	// we can easily get the data from store using useSelector.
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
										dispatch(incNum());
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
										dispatch(decNum());
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

export default App;
