import React, { Component } from 'react';
import Error from './Error';
import '../styles/vitals.scss';

class Vitals extends Component {
  constructor(props) {
    super(props);
  }

  getHours(time) {
    return Math.floor(time / 60);
  }

  getMins(time) {
    return Math.floor(time % 60);
  }

  getSeconds(time) {
    return Math.round(time % 1 * 60);
  }

  renderError() {
    return <Error error={this.props.estimationError} />
  }

  getEstimatedTime(time) {
    return (
      <h3>
        Time: &nbsp;
        { this.getHours(time) ? this.getHours(time) + ' hours ' : '' }
        { this.getMins(time)} mins {this.getSeconds(time) } secs
      </h3>
    );
  }

  isEstimationLessThanDesired() {
    return this.props.estimatedTravelTime <= this.props.desiredTravelTime;
  }

  renderLeaveNotification() {
    return this.isEstimationLessThanDesired()
      ? 'LEAVE'
      : 'DON\'T LEAVE';
  }

  renderDefault() {
    return (
      <p className="monitor-not-active">
        Monitoring is not active. <br /> Enter an origin and a destination below to get started!
      </p>
    );
  }

  renderAlert() {
    return (
      <div>
        <div className="vitals__footer">
          <div className="vitals__leave-notification">
            { this.renderLeaveNotification() }
          </div>
          <div className="vitals__stats">
            { this.getEstimatedTime(this.props.estimatedTravelTime) }
            <h3>Distance: { this.props.estimatedDistance } </h3>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="vitals">
        <div className="vitals__header">
          <h2>[ VITALS ]</h2>
        </div>
        <div className="vitals__body">
          {
            this.props.estimationError
              ? this.renderError() : this.props.estimatedTravelTime
              ? this.renderAlert() : this.renderDefault()
          }
        </div>
      </div>
    );
  }
}

export default Vitals;
