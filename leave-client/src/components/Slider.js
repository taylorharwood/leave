import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { desiredTravelTime } = this.props;

    return (
      <div className="slider">
        <label>{this.props.label}</label>
        <div className="form-group">
          <input
            className="address-form__slider"
            type="range"
            min="0"
            max="500"
            onChange={this.props.onChange}
            value={desiredTravelTime}
            />
          {
            desiredTravelTime > 60 ?
            Math.floor(desiredTravelTime / 60) + ' hour(s) ' +
            desiredTravelTime % 60 + ' mins' :
            desiredTravelTime + ' mins'
          }
        </div>
      </div>

    );
  }
};

export default Slider;
