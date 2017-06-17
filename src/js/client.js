import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Index from "./pages/Index";
import Layout from "./pages/Layout";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";
import StepSix from "./pages/StepSix";
import StepSeven from "./pages/StepSeven";
import Examples from "./pages/Examples";

import store from "./store";

const app = document.getElementById('app');

ReactDOM.render(

<div>	
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Index} />
				<Route path="stepOne" component={StepOne} />
				<Route path="stepTwo" component={StepTwo} />
				<Route path="stepThree" component={StepThree} />
				<Route path="stepFour" component={StepFour} />
				<Route path="stepFive" component={StepFive} />
				<Route path="stepSix" component={StepSix} />
				<Route path="stepSeven" component={StepSeven} />
				<Route path="examples" component={Examples} />
			</Route>
		</Router>
	</Provider>
</div>	
, 
app);


