import React from "react";
import Button from "../components/tutorial/revolverButton_useCase/RevolverButton/Button";

export default class UseCaseOneRevolverButton extends React.Component {
  render() {

    const shopStyle = {
      backgroundColor: 'white',
      padding: 40
    };

    return (
      <div>
        <h2>Use Case 1 (Revolver Button)</h2>
        <p>In diesem Use Case soll in einem simulierten Internetshop ein Kugelschreiber mit grüner Farbe bestellt werden. </p>
 
        <div style={shopStyle}>
          <h1>Kugelschreiber Shop</h1>
          <p>Beschreibung: Kugelschreiber mit vielen verschiedenen Farben zur Auswahl!</p>
          <label>Farbe:</label>
          <br />
          <Button htmlElement="" btnName="Touch" maxItems="6" values={['#EF9A9A', '#E91E63', '#4527A0', '#006064', '#03A9F4', '#00C853']} />
          <br /><br /><br /><br />
          <button type="button">Bestellen</button>
        </div>      
      </div>
    );
  }
}