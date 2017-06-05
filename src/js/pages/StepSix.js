import React from "react";
import Button from "../components/tutorial/step_6/RevolverButton/Button";

export default class StepSix extends React.Component {
  render() {

    return (
      <div>
        <h2>Step 6</h2>
        <Button htmlElement="body" btnName="body color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
    	<Button htmlElement="h1" btnName="h1 color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
    	<Button htmlElement="nav" btnName="nav color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
    	<Button htmlElement="h2" btnName="h2 color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
    	<Button htmlElement="h3" btnName="h3 color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
      </div>
    );
  }
}