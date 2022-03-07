import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);

    this.state = {
      clickButton1: 0,
      clickButton2: 0,
      clickButton3: 0,
    }
  }

  button1() {
    this.setState(({clickButton1}) => ({
      clickButton1: clickButton1 + 1,
    }))
  };
  
  button2() {
    this.setState(({clickButton2}) => ({
      clickButton2: clickButton2 + 1,
    }))
  };
  
  button3() {
    this.setState(({clickButton3}) => ({
      clickButton3: clickButton3 + 1,
    }))
  };

  ChangeButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickButton1, clickButton2, clickButton3 } = this.state;
    return (
      <div className='divButtons'>
        <button 
          onClick={this.button1}
          style={{ backgroundColor: this.ChangeButtonColor(clickButton1) }}
          >Botão 1 | Count = {this.state.clickButton1}
        </button>

        <button 
          onClick={this.button2}
          style={{ backgroundColor: this.ChangeButtonColor(clickButton2) }}
          >Botão 2 | Count = {this.state.clickButton2}
        </button>

        <button 
          onClick={this.button3}
          style={{ backgroundColor: this.ChangeButtonColor(clickButton3) }}
          >Botão 3 | Count = {this.state.clickButton3}
        </button>
      </div>
    );
  }
}

export default App;
