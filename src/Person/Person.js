import React from 'react';

const person = ({ name, age, children }) => {
  return (
    <div>
      <p>My name is { name } and I am { age } years old!</p>
      <p>{ children }</p>
    </div>
  )
}

export default person;
