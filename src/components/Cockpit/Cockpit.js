import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let btnClass = '';
  btnClass = styles.red;
  if (this.state.persons.length <= 2) classes.push(styles.red);
  if (this.state.persons.length <= 1) classes.push(styles.bold);
  return (
    <div>
      <h1>React 16 Experiments</h1>
      <p className={ classes.join(' ') }>Simple Toggle App</p>
      <button
      className={ btnClass }
        onClick={ this.togglePersonsHandler }>
        Switch Name
      </button>
    </div>
  )
}

export default cockpit;
