import React from "react";

function App() {
	return (
		<>
			<div className="container">
				<h1>Increment/Decement Counter</h1>
				<h4>using React and Redux</h4>
				<div className="quantity">
					<a href="#" className="quantity__minus" title="Decrement">
						<span>➖</span>
					</a>
					<input
						type="text"
						name="quantity"
						className="quantity__input"
						value="0"
					/>
					<a href="#" className="quantity__plus" title="Increment">
						<span>➕</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
