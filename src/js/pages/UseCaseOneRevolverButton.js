import React from "react";
import Button from "../components/tutorial/revolverButton_useCase/RevolverButton/Button";

export default class UseCaseOneRevolverButton extends React.Component {
  render() {

    const shopStyle = {
      backgroundColor: 'LightCyan'
    };

    return (
      <div>
        <h2>Use Case 1 (Revolver Button)</h2>
        <p>In diesem Use Case soll in einem fiktiven Shop die Farbe eines Kugelschreibers ausgewählt werden.</p>

        <div style={shopStyle}>
          <h1>Kugelschreiber Shop</h1>
          <p>Beschreibung: Kugelschreiber mit vielen verschiedenen Farben!</p>

          <Button htmlElement="" btnName="Farbe" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
          <br /><br /><br /><br />
          <button type="button">Bestellen</button>
          <br />
       </div>
      </div>
    );
  }
}