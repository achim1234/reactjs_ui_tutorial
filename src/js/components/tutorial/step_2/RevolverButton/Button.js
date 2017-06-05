import React from "react";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const mainButton = {
			backgroundColor: '#2196F3',
			color: 'white',
			border: 'none',
			width: 50,
			height: 50,
			borderRadius: 25,
		};

		return (
			<div>
				<button style={mainButton}>Button</button>
			</div>	
		);
	}
}