import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/top-navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.currentUser.name) {
      this.props.fetchCurrentUser();
    }
  }

  renderLoggedInState() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li onClick={() => this.props.flushUserState()}><a>Logout</a></li>
      </ul>
    );
  }

  renderLoggedOutState() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="login">Login</Link></li>
        <li><Link to="register">Register</Link></li>
      </ul>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <nav id="top-navbar" className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">LEAVE<span className="slogan">APP</span></Link>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                {
                  currentUser.name !== null ?
                  this.renderLoggedInState() :
                  this.renderLoggedOutState()
                }
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
