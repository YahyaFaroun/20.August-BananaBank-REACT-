import React, { Component } from 'react';
import './App.css';

class BananaBankBuchungen extends Component {
  state = {
    userInput: 0,
    balance: 0,
    }

    handleChange = (event) =>{
      this.setState({userInput : event.target.value})
      console.log(this.state.userInput)
    }     
    
    addition = (event) =>{
      this.setState({balance : Number(this.state.balance) + Number(this.state.userInput) })
      console.log(this.state.balance)
    }
    subtraction = (event) =>{
      this.setState({balance : Number(this.state.balance) - Number(this.state.userInput) })
      console.log(this.state.balance)
    }

  render() { 
    return (
      <section>
     <div id="logoImg"><img src="" alt=""/></div>
      <div>
        <h2>Banana Bank</h2>
      </div>
      <div>
        <article className="konto">
          <h3>Dein Girokonto</h3>
          <div>
          <h1 className="saldo">{this.state.balance}</h1>
          </div>
          <input className="geldbetrag" type="number" /*value={this.state.userInput}*/ onChange={this.handleChange} name="" id="" placeholder="Gebe den Betrag ein"/>
        </article>
        <div>
          <input className="auszahlen" type="button" onClick={this.addition} value="Einzahlen"/>
          <input className="einzahlen" type="button" onClick={this.subtraction} value="Auszahlen"/>
        </div>
      </div>
   </section>
      );
  }
}
 
export default BananaBankBuchungen;
