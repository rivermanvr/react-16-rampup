import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    console.log('I clicked the button')
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
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

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const personData = this.state.persons;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let personList = null;
    if (this.state.showPersons) {
      personList = (
        <div>
          { personData.map(person => {
              return <Person name={ person.name } age={ person.age } key={ person.name } />;
            })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <h1>React 16 Experiments</h1>
        <button
          style={ style }
          onClick={ this.togglePersonsHandler }>
          Switch Name
        </button>
        { personList }
      </div>
    );
  }
}

export default App;
