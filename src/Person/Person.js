import React from 'react';

const person = ({ name, age, click, children }) => {
  return (
    <div>
      <p onClick={ click }>
        My name is { name } and I am { age } years old!
      </p>
      <p>{ children }</p>
    </div>
  )
}

export default person;
