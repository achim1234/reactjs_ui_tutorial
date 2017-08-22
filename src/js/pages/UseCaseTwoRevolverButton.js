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
          <select style={marginLeft}>
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
          </select> 
          <br /><br />
          <label>Kraftstoffart:</label>
          <br />
          <Button htmlElement="" btnName="Touch" maxItems="6" values={['Alle', 'Diesel', 'E10', 'Erdgas', 'Autogas', 'Benzin']} />
          <br /><br /><br /><br />
          <button type="button">Suchen</button>
        </div>
      
      </div>
    );
  }
}