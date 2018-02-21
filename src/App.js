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
    const person = this.state.persons;
    return (
      <div className="App">
        <h1>React App</h1>
        <button>Switch Name</button>
        <Person name = { person[0].name } age = { person[0].age } />
        <Person name = { person[1].name } age = { person[1].age } />
        <Person name = { person[2].name } age = { person[2].age }>Where does this go?</Person>
      </div>
    );
  }
}

export default App;
