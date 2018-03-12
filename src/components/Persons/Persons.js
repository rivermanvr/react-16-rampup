import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
    return <Person
      click={ () => props.clicked(index) }
      changed={ (ev) => props.changed(ev, person.id) }
      name={ person.name }
      age={ person.age }
      key={ index }
    />;
  });

export default persons;
