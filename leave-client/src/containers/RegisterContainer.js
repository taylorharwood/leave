import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doRegister, setRegisterError } from '../actions/user';
import Register from '../components/Register';
import '../styles/register.scss';

class RegisterContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Register {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    error: state.user.registerError,
    success: state.user.registerSuccess
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    doRegister,
    setRegisterError
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
