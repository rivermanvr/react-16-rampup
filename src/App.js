import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  
  switchNameHandler = (newName) => {
    console.log('I clicked the button')
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ] });
  }

  nameChangeHandler = (ev) => {
    console.log('Input entered')
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: ev.target.value, age: 29 },
      { name: 'Stephanie', age: 27 }
    ] });
  }

  render() {
    const person = this.state.persons;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>React 16 Experiments</h1>
        <button
          style={ style }
          onClick={ this.switchNameHandler.bind(this, 'Maximilian-btn') }>
          Switch Name
        </button>
        <Person
          name = { person[0].name }
          age = { person[0].age } />
        <Person
          name = { person[1].name }
          age = { person[1].age }
          click = { () => this.switchNameHandler('Zebra-function') }
          changed = { this.nameChangeHandler } />
        <Person
          name = { person[2].name }
          age = { person[2].age }
          click = { this.switchNameHandler.bind(this, 'Howard-bind-3') } >
          This string will pass in props.children!
        </Person>
      </div>
    );
  }
}

export default App;
