import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../../actions";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const dispatch = useDispatch();
	return (
		<>
			<div className="main-div">
				<div className="child-div">
					<figure>
						<figcaption>Add Your List Here ✌️</figcaption>
					</figure>
				</div>

				<div className="additems">
					<input
						type="text"
						placeholder="✍️ Add Items .. "
						value={inputData}
						onChange={(event) => {
							const { value } = event.target;
							setInputData(value);
						}}
					/>
					<i
						className="fa fa-plus add-btn"
						onClick={() => {
							dispatch(addTodo(inputData));
						}}
					></i>
				</div>
			</div>
		</>
	);
};

export default Todo;
