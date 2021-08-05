import React, {useState} from "react";
import "../css/app.css";

const App = ({minVal, maxVal}) => {
	const maxValue = maxVal || 1000;
	const minValue = minVal || 1;
	const [count, setCount] = useState(minValue);

	const increment = () => {
		if (count < maxValue) {
			setCount((parseInt(count) || 0) + 1);
		}
	}

	const decrement = () => {
		if (count > minValue) {
			setCount((parseInt(count) || 1) - 1);
		}
	}

	const isValidInput = (countVal) => {
		return countVal === "" || (!isNaN(countVal) && countVal <= maxValue && countVal >= minValue);
	}

	const onInputValueChange = (event) => {
		const inputVal = event.target.value;
		if (isValidInput(inputVal)) {
			setCount(parseInt(inputVal) || "");
		}
	}

	return(
		<div className="outer-wrapper">
			<button
				className="button-spec descrement-btn text-font"
				onClick={decrement}
			>
				-
			</button>
			<input
				type="text"
				className="input-text text-font"
				onChange={onInputValueChange}
				value={count}
			/>
			<button
				className="button-spec increment-btn text-font"
				onClick={increment}
			>
				+
			</button>
		</div>
	);
};

export default App;
