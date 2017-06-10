import React, { Component } from 'react';
import AddressForm from '../components/AddressForm';
import { bindActionCreators } from 'redux';
import {
  fetchEstimatedTravelTime,
  toggleEstimationsActive,
} from '../actions/estimations';
import {
  setOriginValue,
  setDestinationValue,
  setDesiredTravelTime,
  clearOriginValue,
  clearDestinationValue,
  resetPreferencesState,
} from '../actions/preferences';
import { connect } from 'react-redux';

class AddressFormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AddressForm {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    originValue: state.preferences.originValue,
    destinationValue: state.preferences.destinationValue,
    desiredTravelTime: state.preferences.desiredTravelTime,
    estimationsActive: state.estimations.estimationsActive
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setOriginValue: setOriginValue,
    setDestinationValue: setDestinationValue,
    fetchEstimatedTravelTime: fetchEstimatedTravelTime,
    toggleEstimationsActive: toggleEstimationsActive,
    resetPreferencesState: resetPreferencesState,
    setDesiredTravelTime: setDesiredTravelTime,
    clearOriginValue: clearOriginValue,
    clearDestinationValue: clearDestinationValue
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressFormContainer);
