import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.button = this.button.bind(this);
  }

  button() {
    console.log(this);
    return console.log('Clicou no botão');
  }

  render() {
    return (
      <div className='divButtons'>
        <button onClick={this.button}>Botão 1</button>
        <button onClick={this.button}>Botão 2</button>
        <button onClick={this.button}>Botão 3</button>
      </div>
    );
  }
}

export default App;
