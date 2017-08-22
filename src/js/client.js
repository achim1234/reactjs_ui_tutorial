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
import UseCaseOneDropDown from "./pages/UseCaseOneDropDown";
import UseCaseOneRevolverButton from "./pages/UseCaseOneRevolverButton";
import UseCaseTwoDropDown from "./pages/UseCaseTwoDropDown";
import UseCaseTwoRevolverButton from "./pages/UseCaseTwoRevolverButton";

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
				<Route path="useCaseOneDropDown" component={UseCaseOneDropDown} />
				<Route path="useCaseOneRevolverButton" component={UseCaseOneRevolverButton} />
				<Route path="useCaseTwoDropDown" component={UseCaseTwoDropDown} />
				<Route path="useCaseTwoRevolverButton" component={UseCaseTwoRevolverButton} />

			</Route>
		</Router>
	</Provider>
</div>	
, 
app);


