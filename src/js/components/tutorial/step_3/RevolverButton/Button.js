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
			borderRadius: 25
		};

		const revItem = {
			backgroundColor: '#673AB7',
			color: 'white',
			border: 'none',
			width: 24,
			height: 24,
			borderRadius: 12
		};

		return (
			<div>
				<button style={mainButton} onClick={this.toggleShowHide}>Button</button>

				<div>
					{this.state.showComponent ? 
						<RevolverItem value="1" styleProp={revItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="2" styleProp={revItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="3" styleProp={revItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="4" styleProp={revItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="5" styleProp={revItem} /> : 
						null
					}
					{this.state.showComponent ? 
						<RevolverItem value="6" styleProp={revItem} /> : 
						null
					}
				</div>
			</div>
		);
	}
}