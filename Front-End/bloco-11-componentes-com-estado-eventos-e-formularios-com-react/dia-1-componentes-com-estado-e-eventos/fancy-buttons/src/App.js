import React from 'react';

function handleClick1() {
  alert('Clicou 1');
}

function handleClick2() {
  alert('Clicou 2');
}

function handleClick3() {
  alert('Clicou 3');
}

export default class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <button onClick={handleClick1}>Click 1</button>
        <button onMouseOver={handleClick2}>Click 2</button>
        <button onDoubleClick={handleClick3}>Click 3</button>
      </div>
    );
  }
}
