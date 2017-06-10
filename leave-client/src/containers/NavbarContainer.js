import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setCurrentUser,
  flushUserState
} from '../actions/user';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
  }

  fetchCurrentUser() {
    if (window.localStorage.getItem('currentUser')) {
      const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
      this.props.setCurrentUser(
        currentUser.name,
        currentUser.email
      );
    }
  }

  render() {
    return (
      <Navbar
        {...this.props}
        fetchCurrentUser={() => this.fetchCurrentUser()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    flushUserState,
    setCurrentUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
