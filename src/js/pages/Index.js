import React from "react";
import Button from "../components/tutorial/step_5/RevolverButton/Button";

export default class IndexPage extends React.Component {
  render() {

    return (
      <div>
        <Button btnName="num" maxItems="8" values={['1', '2', '3', '4', '5', '6', '7', '8']} />
      </div>
    );
  }
}