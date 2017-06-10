import React, { Component } from 'react';
import { connect } from 'react-redux';
import OriginInput from './OriginInput';
import DestinationInput from './DestinationInput';
import Slider from './Slider';
import FormFooter from './FormFooter';
import '../styles/address-form.scss';

class AddressForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit(event) {
    // Prevent form from submitting on hitting enter.
    event.preventDefault();
  }

  fetchEstimatedTravelTime() {
    this.props.toggleEstimationsActive();
    this.props.fetchEstimatedTravelTime(
      this.props.originValue,
      this.props.destinationValue
    );
  }

  cancelEstimations() {
    // Clears timeout so any recursive AJAX calls are cancelled.
    window.clearTimeout(window.estimationTimeout);
    this.props.toggleEstimationsActive();
  }
  
  render() {
    const {
      setOriginValue,
      clearOriginValue,
      setDestinationValue,
      clearDestinationValue,
      originValue,
      destinationValue,
      desiredTravelTime,
      setDesiredTravelTime,
      estimationsActive,
      resetPreferencesState
    } = this.props;

    return (
      <div className="address-form">
        <form
          onSubmit={() => this.handleFormSubmit}
        >
          <OriginInput
            id="origin-input"
            iconClass="fa fa-location-arrow"
            setOriginValue={setOriginValue}
            onChange={(event) => setOriginValue(event.target.value)}
            onClick={() => clearOriginValue()}
            placeholder="Enter your origin..."
            value={originValue}
          />
          <br/>
          <DestinationInput
            id="destination-input"
            iconClass="fa fa-stop-circle-o"
            setDestinationValue={setDestinationValue}
            onChange={(event) => setDestinationValue(event.target.value)}
            onClick={() => clearDestinationValue()}
            placeholder="Enter your destination..."
            value={destinationValue}
          />
          <br />
          <Slider
            label="Desired Travel Time"
            desiredTravelTime={desiredTravelTime}
            onChange={event => setDesiredTravelTime(event.target.value)}
          />
          <FormFooter
            estimationsActive={estimationsActive}
            fetchEstimatedTravelTime={() => this.fetchEstimatedTravelTime()}
            cancelEstimations={() => this.cancelEstimations()}
            resetPreferencesState={() => resetPreferencesState()}
          />
        </form>
      </div>
    );
  }
}

export default AddressForm;
