import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    // // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    this.state = {
      clicks: 0 
    }
    this.button = this.button.bind(this);
  }

  button() {
    console.log('Ciclou no botão!');
  }

  render() {
    return (
      <div>
        <button onClick={ this.button }>Botão</button>
      </div>
    );
  }
}

export default App;
