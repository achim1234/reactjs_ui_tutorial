import React from "react";
import Button from "../components/tutorial/revolverButton_useCaseTwo/RevolverButton/Button";

export default class UseCaseTwoDropDown extends React.Component {
  render() {

    const shopStyle = {
      backgroundColor: 'white',
      padding: 20
    };

    return (
      <div>
        <h2>Use Case 2 (Drop Down)</h2>
        <p>In diesem Use Case soll in einem simulierten Kraftstoffrechner eine Automarke und eine Kraftstoffart ausgewählt werden um den Kraftstoffverbrauch des gewählten Autos zu berechnen.</p>
        
        <div style={shopStyle}>
          <h1>Kraftstoff-Rechner</h1>
          <p>Hersteller:</p>
          <select className="selectpicker">
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
            <option value="audi">Ferrari</option>
            <option value="audi">Ford</option>
            <option value="audi">Renault</option>
            <option value="audi">VW</option>
            <option value="audi">Porsche</option>
            <option value="audi">Opel</option>
            <option value="audi">KIA</option>
          </select> 
          <br /><br />
          <p>Kraftstoffart: </p>
          <select className="selectpicker">
            <option value="alle">Alle</option>
            <option value="diesel">Diesel</option>
            <option value="e10">E10</option>
            <option value="erdgas">Erdgas</option>
            <option value="autogas">Autogas</option>
            <option value="benzin">Benzin</option>
          </select> 
          <br /><br /><br /><br />
          <button type="button">Suchen</button>
        </div>
    	
      </div>
    );
  }
}