import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const fruits = ['apples', 'oranges', 'strawberries', 'watermelon', 'grapes'];

class App extends Component {
  render() {
    return (
      <ol>{fruits.map(fruits => Task(fruits)) }</ol>
    );
  }
}

export default App;
