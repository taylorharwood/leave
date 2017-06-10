import React, { Component } from 'react';
import { Link } from 'react-router';

class Success extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert alert-success" role="alert">
        <span className="glyphicon glyphicon-ok" aria-hidden="true" />&nbsp;
        <span className="sr-only">Success:</span>
        Success! { this.props.success }
        <br />
        Click <Link to="login">here</Link> to login.
      </div>
    );
  }
}

export default Success;
