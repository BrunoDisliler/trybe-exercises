import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    alert('Clicou 1');
  }
  
  handleClick2() {
    alert('Clicou 2');
  }
  
  handleClick3() {
    alert('Clicou 3');
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <button onClick={this.handleClick1}>Click 1</button>
        <button onMouseOver={this.handleClick2}>Click 2</button>
        <button onDoubleClick={this.handleClick3}>Click 3</button>
      </div>
    );
  }
}
