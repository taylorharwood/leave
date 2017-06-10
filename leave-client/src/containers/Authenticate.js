import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const Authenticate = WrappedComponent => {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      const { token } = this.props;

      // if no token present, redirect to login
      if (!token) {
        browserHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent />
    }
  }

  function mapStateToProps(state) {
    return {
      token: state.user.token
    };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}

export default Authenticate;