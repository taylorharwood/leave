import React, { Component } from 'react';
import '../styles/button-two.scss';

class ButtonTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className="button-two"
        onClick={() => this.props.action()}
      >
        <h1 className="button-two__title">
          { this.props.title }
        </h1>
      </button>
    );
  }
}

export default ButtonTwo;
