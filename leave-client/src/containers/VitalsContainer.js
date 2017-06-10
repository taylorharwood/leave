import React, { Component } from 'react';
import Vitals from '../components/Vitals';
import { connect } from 'react-redux';

class VitalsContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <Vitals {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    estimatedTravelTime: state.estimations.estimatedTravelTime,
    desiredTravelTime: state.preferences.desiredTravelTime,
    estimationHistory: state.estimations.estimationHistory,
    estimationError: state.estimations.estimationError,
    estimatedDistance: state.estimations.estimatedDistance
  };
};

export default connect(mapStateToProps)(VitalsContainer);
