import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doLogin } from '../actions/user';
import Login from '../components/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    email: state.loginEmail,
    password: state.loginPassword,
    error: state.user.loginError
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    doLogin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
