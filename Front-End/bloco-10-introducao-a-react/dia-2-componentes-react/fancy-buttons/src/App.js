import './App.css';
import React from 'react';

class App extends React.Component {
  button1() {
    return console.log('Clicou no botão 1');
  }
  
  button2() {
    return console.log('Clicou no botão 2');
  }
  
  button3() {
    return console.log('Clicou no botão 3');
  }

  render() {
    return (
      <div className='divButtons'>
        <button onClick={this.button1}>Botão 1</button>
        <button onClick={this.button2}>Botão 2</button>
        <button onClick={this.button3}>Botão 3</button>
      </div>
    );
  }
}

export default App;
