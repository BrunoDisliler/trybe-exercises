import logo from './logo.svg';
import './App.css';
import React from 'react';

function button() {
  console.log('Ciclou no botão');
}

class App extends React.Component {
  render() {
    return (
      <button onClick={ button }>Aperte aqui</button>
    );
  }
}

export default App;
