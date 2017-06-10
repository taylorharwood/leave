import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import ButtonOne from './ButtonOne';
import ButtonTwo from './ButtonTwo';
import '../styles/splash.scss';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="splash">
          <Link to="leave">
            <ButtonOne
              title="Go To App"
            />
          </Link>
          <Link to="info">
            <ButtonOne
              title="More Info"
            />
          </Link>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
};

export default Splash;
