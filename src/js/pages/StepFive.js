import React from "react";
import Button from "../components/tutorial/step_5/RevolverButton/Button";

export default class StepFive extends React.Component {
  render() {

    return (
      <div>
        <h2>Step 5</h2>
        <Button btnName="num" maxItems="6" values={['1', '2', '3', '4', '5', '6']} />
        <Button btnName="num" maxItems="6" values={['1', '2', '3', '4', '5', '6']} />
        <Button btnName="num" maxItems="6" values={['1', '2', '3', '4', '5', '6']} />
      </div>
    );
  }
}