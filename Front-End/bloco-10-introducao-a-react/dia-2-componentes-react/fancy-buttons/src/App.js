/*
1 - Crie uma aplicação React com npx create-react-app fancy-buttons. 
Altere o componente App.js para que seja um componente de classe e 
contenha um botão associado a um evento que imprime um texto qualquer via console.log(). 
Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
*/

import './App.css';
import React from 'react';

function clickEvent() {
  return console.log('Clicou');
}

class App extends React.Component {
  render() {
    return (<button onClick={clickEvent}>Botão</button>);
  }
}

export default App;
