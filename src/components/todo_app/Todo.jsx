import React from "react";

const Todo = () => {
	return (
		<>
			<div className="main-div">
				<div className="child-div">
					<figure>
						<figcaption>Add Your List Here ✌️</figcaption>
					</figure>
				</div>

				<div className="additems">
					<input type="text" placeholder="✍️ Add Items .. " />
					<i className="fa fa-plus add-btn"></i>
				</div>
			</div>
		</>
	);
};

export default Todo;
