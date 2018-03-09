import React from 'react';
import styles from './Person.css';

const person = ({ name, age, click, changed, children }) => {
  const rnd = Math.random();
  if (rnd > .75) {
    throw new Error('Something is wrong');
  }
  return (
    <div className={ styles.Person }>
      <p onClick={ click }>
        My name is { name } and I am { age } years old!
      </p>
      <p>{ children }</p>
      <input type="text" onChange={ changed } value={ name } className={ styles.visible } />
    </div>
  )
}

export default person;
