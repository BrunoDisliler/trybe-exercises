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

  changeColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2,  numeroDeCliques3 } = this.state;
    return (
      <div style={{display: 'flex'}}>

        <button 
          onClick={this.handleClick1}
          style={{ backgroundColor: this.changeColor(numeroDeCliques1) }}
          >
            Botão 1 | Count = { numeroDeCliques1 }
        </button>

        <button 
          onMouseOver={this.handleClick2}
          style={{ backgroundColor: this.changeColor(numeroDeCliques2) }}
          >
            Botão 2 | Count = { numeroDeCliques2 }
        </button>

        <button 
          onDoubleClick={this.handleClick3}
          style={{ backgroundColor: this.changeColor(numeroDeCliques3) }}
          >
            Botão 3 | Count = { numeroDeCliques3 }
        </button>

      </div>
    );
  }
}
