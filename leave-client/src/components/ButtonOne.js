import React from 'react';
import '../styles/button-one.scss';

class ButtonOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className="button-one"
        onClick={() => this.props.action()}
      >
        <h1 className="button-one__title">
          { this.props.title }
        </h1>
      </button>
    );
  }
}

export default ButtonOne;
