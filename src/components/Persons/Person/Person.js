import React, { Component } from 'react';
import styles from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] - inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] - inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] - inside componentDidMount()');
  }

  render() {
    console.log('[Person.js] - inside render()');
    return (
      <div className={ styles.Person }>
        <p onClick={ this.props.click }>
          My name is { this.props.name } and I am { this.props.age } years old!
        </p>
        <p>{ this.props.children }</p>
        <input type="text" onChange={ this.props.changed } value={ this.props.name } className={ styles.visible } />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
