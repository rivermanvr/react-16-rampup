import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] - inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] - inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] - inside componentDidMount()');
  }

  state = {
    persons: [
      { id: 332, name: 'Max', age: '28' },
      { id: 554, name: 'Manu', age: 29 },
      { id: 123, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] - inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  } 

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] - inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] - inside componentDidUpdatet()');
  }

  render() {
    console.log('[App.js] - inside render()');
    const personData = this.state.persons;
    let personList = null;
    if (this.state.showPersons) {
      personList = <Persons
        clicked={ this.deletePersonHandler }
        changed={ this.nameChangeHandler }
        persons={ personData }
        />;
    }
    return (
      <div className={ styles.App }>
      <Cockpit
        appTitle={ this.props.title }
        showPersons={this.state.showPersons}
        persons={ this.state.persons }
        clicked={ this.togglePersonsHandler }
      />
        { personList }
      </div>
    );
  }
}

export default App;
