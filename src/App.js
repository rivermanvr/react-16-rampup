import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Vin', age: 45 },
      { name: 'Karen', age: 40 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button>Switch Name</button>
        <Person name = "Vinny" age = "45" />
        <Person name = "Karen" age = "35" />
        <Person name = "Alex" age = "32">Where does this go?</Person>
      </div>
    );
  }
}

export default App;
