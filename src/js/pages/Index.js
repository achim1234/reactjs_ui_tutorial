import React from "react";
import Button from "../components/tutorial/step_6/RevolverButton/Button";

export default class IndexPage extends React.Component {
  render() {

    return (
      <div>
        <Button htmlElement="body" btnName="body color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
        <br /><br /><br /><br />
        <Button htmlElement="h1" btnName="h1 color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
        <br /><br /><br /><br />
        <Button htmlElement="nav" btnName="nav color" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
      </div>
    );
  }
}