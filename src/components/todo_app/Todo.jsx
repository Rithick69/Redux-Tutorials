import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addTodo,
	checkedTodo,
	deleteTodo,
	editTodo,
	removeTodo,
} from "../../actions";
import "./index.css";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const [toggleIcon, setToggleIcon] = useState(true);
	const [editItemId, setEditItemId] = useState(null);

	const list = useSelector((state) => {
		return state.todoReducer.list;
	});
	const dispatch = useDispatch();

	const listOfItems = () => {
		if (!inputData) {
			alert("Please enter data");
		} else if (!toggleIcon && inputData) {
			dispatch(editTodo(editItemId, inputData));
			setToggleIcon(true);
			setInputData("");
			setEditItemId(null);
		} else {
			dispatch(addTodo(inputData));
			// Clearing the input field after add the item to the array.
			setInputData("");
			setToggleIcon(true);
		}
	};

	const editItem = (id) => {
		let newEditItem = list.find((elem) => {
			return elem.id === id;
		});
		//getLocalItems(newEditItem);
		setToggleIcon(false);
		setInputData(newEditItem.data);
		setEditItemId(id);
	};

	return (
		<>
			<div className="container">
				<header className="header">
					<h1>ToDo App</h1>
					<div className="form" id="task-form">
						<input
							type="text"
							id="task-input"
							placeholder="✍️ Add Items .. "
							value={inputData}
							onChange={(event) => {
								const { value } = event.target;
								setInputData(value);
							}}
						/>
						<button className="add" onClick={listOfItems}>
							{toggleIcon ? "Add" : "Edit"}
						</button>
					</div>
				</header>
				<ul className="task-list" id="task-list">
					{list.map((elem) => {
						return (
							<li
								style={{
									textDecoration: elem.status ? "line-through" : "none",
								}}
							>
								<input
									type="radio"
									id={elem.id}
									onClick={() => {
										dispatch(checkedTodo(elem.id, true));
									}}
								/>
								<div className="task">
									<h3>{elem.data}</h3>
								</div>
								<div className="actions">
									<button className="edit" type="button" disabled={elem.status}>
										<i
											className="fa fa-pencil"
											title="Edit Item"
											onClick={() => {
												editItem(elem.id);
											}}
										></i>
									</button>
									<button className="delete">
										<i
											className="fa fa-trash"
											title="Delete Item"
											onClick={() => {
												dispatch(deleteTodo(elem.id));
											}}
										></i>
									</button>
								</div>
							</li>
						);
					})}
				</ul>

				<div className="remove">
					<button
						className="remove_btn"
						onClick={() => {
							dispatch(removeTodo());
							setInputData("");
							setToggleIcon(true);
						}}
					>
						Remove All
					</button>
				</div>
			</div>
		</>
	);
};

export default Todo;
