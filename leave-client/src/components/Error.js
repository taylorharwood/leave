import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error:</span>
        Error: { this.props.error }
      </div>
    );
  }
}

export default Error;
