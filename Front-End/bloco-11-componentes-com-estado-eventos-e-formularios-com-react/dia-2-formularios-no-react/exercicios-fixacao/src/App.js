import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: ''
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Exercícios de Formulários React</h1>
        <form>
          <label>
            Qual seu estado favorito?
            <textarea name='estadoFavorito' value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
          type='checkbox'
          name='idade'
          />
          <input
            type='select'
            name='vaiComparecer'
          />
        </form>
      </div>
    );
  }
}

export default App;
