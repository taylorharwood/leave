import React, { Component } from 'react';

import Logo from './Logo';
import NavbarContainer from '../containers/NavbarContainer';
import '../styles/global.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.location.pathname === '/' ? "background-gradient" : ""}>
        <NavbarContainer />
        <div className="wrapper">
          <Logo />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
