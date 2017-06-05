import React from "react";
import RevolverItem from "./RevolverItem";
export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      		showComponent: false
    	};
		this.toggleShowHide = this.toggleShowHide.bind(this);
	}

	toggleShowHide(){
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});
	}

	render() {
		const mainButton = {			
			backgroundColor: '#2196F3',
			color: 'white',
			border: 'none',
			width: 50,
			height: 50,
			borderRadius: 25,
			margin: 0,
			marginTop: 0,
			position: 'absolute',
			top: 85,
			left: 85
		};

		const mainCentered = {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 0
		};

		return (
			<div style={mainCentered}>
				<button style={mainButton} onClick={this.toggleShowHide}>Button</button>

				<div>
					{this.state.showComponent ? 
						<RevolverItem value="1" currentItem="1" maxItems="6" /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="2" currentItem="2" maxItems="6" /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="3" currentItem="3" maxItems="6" /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="4" currentItem="4" maxItems="6" /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="5" currentItem="5" maxItems="6" /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="6" currentItem="6" maxItems="6" /> : 
						null
					}
				</div>
			</div>
		);
	}
}

/*
import React from "react";

import RevolverItem from "./RevolverItem";
import ButtonStyles from "./ButtonStyles";



export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      		showComponent: false
    	};

		this.toggleShowHide = this.toggleShowHide.bind(this);
		this.toggleShowHideParent = this.toggleShowHideParent.bind(this);
	}

	//wird aufgerufen, wenn RevolverItem angecklickt wurde. Werte werden an die Funktion übergeben.
	toggleShowHide(value, htmlElement){
		//alert(value + ", " + htmlElement);
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});

		var background = document.getElementsByTagName(this.props.htmlElement)[0];
		background.style.backgroundColor = value;

	}

	//wird nur aufgerufen, wenn großer Button in der Mitte geklickt wird
	toggleShowHideParent(){
		var newState = this.state.showComponent == false ? true : false;
		this.setState({showComponent: newState});
	}


	render() {
		const mainButton = {			
			backgroundColor: ButtonStyles.colorButton,
			color: ButtonStyles.colorWhite,
			margin: 0,
			marginTop: 0,
			width: 50,
			height: 50,
			borderRadius: 25,
			border: 'none',
			position: 'absolute',
			top: 85,
			left: 85
		};

		const mainCentered = {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 0
		};

		var revolverButtons = [];
		for(var i = 1; i <= this.props.maxItems; i++){
			//alert("Schleife: " + i);
			revolverButtons.push(this.state.showComponent && <RevolverItem toggleShowHide={this.toggleShowHide} value={this.props.values[i-1]} currentItem={i} maxItems={this.props.maxItems} />);
		}

		return (
			<div id="revolverButtonBox" >

				<div id="revolverItems" >
					<div style={mainCentered}>
						<button id="btnRev" style={mainButton} onClick={this.toggleShowHideParent} onTouchCancel={this.toggleShowHideParent}>{this.props.btnName}</button>
						{revolverButtons}
					</div>

				</div>
				<div id="revolvers"></div>
			</div>
		);
	}
}
*/