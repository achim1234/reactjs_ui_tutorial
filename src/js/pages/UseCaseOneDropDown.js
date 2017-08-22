import React from "react";
import Button from "../components/tutorial/revolverButton_useCase/RevolverButton/Button";


export default class UseCaseOneDropDown extends React.Component {
  render() {

    const style1 = {
      backgroundColor: '#EF9A9A',
      color: 'white'
    };
    const style2 = {
      backgroundColor: '#E91E63',
      color: 'white'
    };
    const style3 = {
      backgroundColor: '#4527A0',
      color: 'white'
    };
    const style4 = {
      backgroundColor: '#006064',
      color: 'white'
    };
    const style5 = {
      backgroundColor: '#03A9F4',
      color: 'white'
    };
    const style6 = {
      backgroundColor: '#00C853',
      color: 'white'
    };

    const shopStyle = {
      backgroundColor: 'LightCyan'
    };



    return (
      <div>
        <h2>Use Case 1 (Drop Down)</h2>
        <p>In diesem Use Case soll in einem fiktiven Shop die Farbe eines Kugelschreibers ausgewählt werden.</p>
        <br />
        <div style={shopStyle}>
          <h1>Kugelschreiber Shop</h1>
          <p>Beschreibung: Kugelschreiber mit vielen verschiedenen Farben!</p>


          
          <p>Farbauswahl:</p>
          <select>
            <option style={style1} value="hellpink">helles Pink</option>
            <option style={style2} value="pink">Pink</option>
            <option style={style3} value="lila">Lila</option>
            <option style={style4} value="dunkelgruen">dunkel Grün</option>
            <option style={style5} value="blau">Blau</option>
            <option style={style6} value="gruen">Grün</option>
          </select> 
          <br /><br /><br /><br />
          <button type="button">Bestellen</button>
          <br />
    	 </div>
      </div>
    );
  }
}