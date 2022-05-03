import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  };
  
  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  };
  
  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  };

  render() {
    return (
      <div style={{display: 'flex'}}>
        <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
        <button onMouseOver={this.handleClick2}>{this.state.numeroDeCliques2}</button>
        <button onDoubleClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
      </div>
    );
  }
}
