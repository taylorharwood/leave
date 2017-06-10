import React, { Component } from 'react';
import '../styles/logo.scss';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="logo"
      >
        <h1>Leave</h1>
        <span>App</span>
        <br />
        <span className="logo__slogan">Driving in traffic sucks. So, do it less.</span>
        <hr className="logo__fade-line" />
      </div>
    );
  }
};

export default Logo;
