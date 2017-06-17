import React from "react";
export default class RevolverItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var x, y;
		var currentItem = this.props.currentItem -1;

		//Farbe, die als value-Attribut übergeben wird
		var value = this.props.value;
		var num = this.props.maxItems;
		var radius = 80;
		var offsetX = 25;
		var offsetY = 18;

     	x = (radius * Math.cos(currentItem / num * 2 * Math.PI)) + offsetX;
		y = (radius * Math.sin(currentItem / num * 2 * Math.PI)) + offsetY;

		const style = {
			backgroundColor: value,
			color: 'white',
			position: 'absolute',
			left: x,
			top: y,
			width: 40,
			height: 24,
			borderRadius: 12,
			border: '1px solid #2196F3'
		};


		var toggleShowHide = this.props.toggleShowHide;

		return (
				<button style={style} onClick={() => toggleShowHide(this.props.value, this.props.htmlElement)} onTouchCancel={() => toggleShowHide(this.props.value, this.props.htmlElement)}></button>
		);
	}
} 