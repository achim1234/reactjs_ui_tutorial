import React from "react";

export default class RevolverItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var x, y;
		var currentItem = this.props.currentItem -1;
		var num = this.props.maxItems;
		console.log(currentItem);
		console.log(num);
		var radius = 50;
		var offsetX = 100;
		var offsetY = 100;

     	x = (radius * Math.cos(currentItem / num * 2 * Math.PI)) + offsetX;
		y = (radius * Math.sin(currentItem / num * 2 * Math.PI)) + offsetY;

		const revItem = {			
			backgroundColor: '#673AB7',
			color: 'white',
			border: 'none',
			width: 24,
			height: 24,
			borderRadius: 12,
			position: 'absolute',
			left: x,
			top: y
		};

		return (
				<button style={revItem}>{this.props.value}</button>
		);
	}
} 