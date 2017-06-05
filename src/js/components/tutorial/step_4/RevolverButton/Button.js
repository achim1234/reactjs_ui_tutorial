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