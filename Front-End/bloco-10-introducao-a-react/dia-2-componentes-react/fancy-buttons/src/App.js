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
