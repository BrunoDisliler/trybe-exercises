import React from "react";
import data from './data';
import Pokedex from "./Components/Pokedex";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex toy={ data }/>
      </div>
    );
  }
}

export default App;
