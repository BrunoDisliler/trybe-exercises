import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);

    this.state = {
      clicksutton1: 0,
      clickButton2: 0,
      clicksButton3: 0,
    }
  }

  button1() {
    this.setState((prevState) => ({
      clicksutton1: prevState.clicksutton1 + 1,
    }))
  };
  
  button2() {
    this.setState((prevState) => ({
      clickButton2: prevState.clickButton2 + 1,
    }))
  };
  
  button3() {
    this.setState((prevState) => ({
      clicksButton3: prevState.clicksButton3 + 1,
    }))
  };

  render() {
    return (
      <div className='divButtons'>
        <button onClick={this.button1}>Botão 1 | Count = {this.state.clicksutton1}</button>
        <button onClick={this.button2}>Botão 2 | Count = {this.state.clickButton2}</button>
        <button onClick={this.button3}>Botão 3 | Count = {this.state.clicksButton3}</button>
      </div>
    );
  }
}

export default App;
