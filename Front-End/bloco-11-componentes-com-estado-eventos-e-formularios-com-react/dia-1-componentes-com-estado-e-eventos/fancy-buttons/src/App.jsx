import logo from './logo.svg';
import './App.css';
import React from 'react';

function button1() {
  console.log('Ciclou no botão 1');
}

function button2() {
  console.log('Ciclou no botão 2');
}

function button3() {
  console.log('Ciclou no botão 3');
}
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ button1 }>Botão 1</button>
        <button onClick={ button2 }>Botão 2</button>
        <button onClick={ button3 }>Botão 3</button>
      </div>
    );
  }
}

export default App;


// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .