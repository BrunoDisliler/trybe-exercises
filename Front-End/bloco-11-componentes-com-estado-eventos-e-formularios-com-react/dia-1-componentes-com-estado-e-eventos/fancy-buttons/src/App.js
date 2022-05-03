import React from 'react';

function handleClick() {
  alert('Clicou');
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
}
