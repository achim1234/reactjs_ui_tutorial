import React from "react";
import Button from "../components/tutorial/revolverButton_useCase/RevolverButton/Button";

export default class UseCaseTwoRevolverButton extends React.Component {
  render() {

    return (
      <div>
        <h2>Use Case 2 (Revolver Button)</h2>
        <p>In diesem Use Case soll in einem fiktiven Shop die Farbe eines Kugelschreibers ausgewählt werden.</p>
        
        <Button htmlElement="" btnName="Farbe" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
    	
      </div>
    );
  }
}