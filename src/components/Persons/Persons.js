import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] - inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] - inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] - inside componentDidMount()');
  }

   componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] - inside componentWillReceiveProps()', nextProps);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] - inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  } 

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] - inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update Persons.js] - inside componentDidUpdatet()');
  }

  render() {
    console.log('[Persons.js] - inside render()');
    return this.props.persons.map((person, index) => {
      return (<Person
        click={ () => this.props.clicked(index) }
        changed={ (ev) => this.props.changed(ev, person.id) }
        name={ person.name }
        age={ person.age }
        key={ index }
        position={ index }
      />);
    });
  }
}

export default Persons;
