import React from 'react';

const person = ({ name, age }) => {
  return (
    <div>
      <p>My name is { name } and I am { age } years old!</p>
      <p>{ props.children }</p>
    </div>
  )
}

export default person;
