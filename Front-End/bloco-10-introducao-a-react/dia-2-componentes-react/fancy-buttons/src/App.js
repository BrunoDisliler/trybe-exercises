import './App.css';
import React from 'react';

function button1() {
  return console.log('Clicou no botão 1');
}

function button2() {
  return console.log('Clicou no botão 2');
}

function button3() {
  return console.log('Clicou no botão 3');
}
class App extends React.Component {
  render() {
    return (
      <div className='divButtons'>
        <button onClick={button1}>Botão 1</button>
        <button onClick={button2}>Botão 2</button>
        <button onClick={button3}>Botão 3</button>
      </div>
    );
  }
}

export default App;
