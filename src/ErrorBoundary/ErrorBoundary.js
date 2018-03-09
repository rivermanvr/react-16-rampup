import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  ComponentDidCatch = (error, info)=> {

  }

  render () {
    return (
      <h1>Something wend wrong</h1>
    );
  }
}