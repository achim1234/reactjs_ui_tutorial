import React from "react";
import Button from "../components/tutorial/revolverButton_useCaseTwo/RevolverButton/Button";

export default class UseCaseTwoRevolverButton extends React.Component {
  render() {

    const shopStyle = {
      padding: 20
    };

    const marginLeft = {
      marginLeft: 70
    };

    return (
      <div>
        <h2>Use Case 2 (Drop Down)</h2>
        <p>In diesem Use Case soll eine Automarke und Kraftstoffart ausgewählt werden, um den Spritverbrauch zu ermitteln.</p>
        
        <div style={shopStyle}>
          <h1>Kraftstoff-Rechner</h1>
          <label>Hersteller:</label>
          <br />
          <Button className="1" htmlElement="" btnName="Touch" maxItems="9" values={['Mercedes', 'BMW', 'Ferrari', 'Ford', 'Renault', 'VW', 'Porsche', 'Opel', 'KIA']} />
          <br /><br /><br /><br /><br />

          <label>Kraftstoffart:</label>
          <br />
          <Button className="2" htmlElement="" btnName="Touch" maxItems="6" values={['Alle', 'Diesel', 'E10', 'Erdgas', 'Autogas', 'Benzin']} />
          <br /><br /><br /><br />
          <button type="button">Suchen</button>
        </div>
      
      </div>
    );
  }
}