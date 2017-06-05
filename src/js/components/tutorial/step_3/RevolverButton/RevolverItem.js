import React from "react";

export default class RevolverItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button style={this.props.styleProp}>{this.props.value}</button>
		);
	}
} 