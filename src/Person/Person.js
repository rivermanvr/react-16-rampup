import React from 'react';
import './Person.css';

const person = ({ name, age, click, changed, children }) => {
  return (
    <div className="Person">
      <p onClick={ click }>
        My name is { name } and I am { age } years old!
      </p>
      <p>{ children }</p>
      <input type="text" onChange={ changed } value={ name } className="visible" />
    </div>
  )
}

export default person;
