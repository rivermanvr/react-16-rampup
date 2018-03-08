import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 332, name: 'Max', age: 28 },
      { id: 554, name: 'Manu', age: 29 },
      { id: 123, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  nameChangeHandler = (ev, id) => {
    console.log('Input entered');
    const personIndex = this.state.persons.findIndex(person =>{
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    const persons = [...this.state.persons];
    person.name = ev.target.value;
    persons[personIndex] = person;
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const personData = this.state.persons;
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let personList = null;
    if (this.state.showPersons) {
      personList = (
        <div>
          { personData.map((person, index) => {
              return <Person
                click={ () => this.deletePersonHandler(index) }
                changed={ (ev) => this.nameChangeHandler(ev, person.id) }
                name={ person.name }
                age={ person.age }
                key={ index }
              />;
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }
    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');
    return (
      <div className="App">
        <h1>React 16 Experiments</h1>
        <p className={ classes.join(' ') }>Simple Toggle App</p>
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
