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

// to get the data from Local Storage

// const getLocalItems = () => {
// 	let list = localStorage.getItem("lists");

// 	if (list) {
// 		return JSON.parse(localStorage.getItem("lists"));
// 	} else {
// 		return [];
// 	}
// };

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const [toggleIcon, setToggleIcon] = useState(true);
	const [editItemId, setEditItemId] = useState(null);

	const list = useSelector((state) => {
		// if (state.todoReducer.list.length === 0) {
		// 	return getLocalItems()
		// }
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

	// useEffect(() => {
	// 	localStorage.setItem("lists", JSON.stringify(list));
	// }, [list]);

	return (
		<>
			<div className="container">
				<header className="header">
					<h1>TODO List</h1>
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
					{list.map((elem, index) => {
						return (
							<li key={index}
								style={{
									textDecoration: elem.status ? "line-through" : "none",
								}}
							>
								<input
									type="radio"
									id={elem.id}
									checked={elem.status}
									readOnly={true}
									onClick={() => {
										dispatch(checkedTodo(elem.id, !elem.status));
									}}
								/>
								<div className="task">
									<h3>{elem.data}</h3>
								</div>
								<div className="actions">
									<button
										className={elem.status ? "disable_btn" : "edit"}
										type="button"
										onClick={() => {
											editItem(elem.id);
										}}
										disabled={elem.status}
									>
										<i className="fa fa-pencil" title="Edit Item" />
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
				{
					list.length !== 0 ?
						<div className="remove">
							<button
								className="remove_btn"
								onClick={() => {
									dispatch(removeTodo());
									setInputData("");
									setToggleIcon(true);
									localStorage.setItem("lists", JSON.stringify([]));
								}}
							>
								Remove All
							</button>
						</div>
					: ''
				}
			</div>
		</>
	);
};

export default Todo;
