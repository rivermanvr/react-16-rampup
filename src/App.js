import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name = "Vinny" age = "45" />
        <Person name = "Karen" age = "35" />
        <Person name = "Alex" age = "32">Where does this go?</Person>
      </div>
    );
  }
}

export default App;
