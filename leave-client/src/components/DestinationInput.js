import React, { Component } from 'react';
import '../styles/input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let destinationInput = document.getElementById('destination-input');
    this.addAutoComplete(destinationInput).addBlurListeners(destinationInput);
  }

  addAutoComplete(input) {
    let destinationAutocomplete = new google.maps.places.Autocomplete(input);

    destinationAutocomplete.addListener('place_changed', () => {
      this.props.setDestinationValue(input.value);
    });

    return this;
  }

  addBlurListeners(input) {
    let service = new google.maps.places.AutocompleteService();

    google.maps.event.addDomListener(input, 'blur', event => {
      service.getPlacePredictions({ input: input.value }, (predictions, status) => {
        if (status === 'OK') {
          this.props.setDestinationValue(predictions[0].description);
        }
      });
    });

    return this;
  }

  render() {
    return (
      <div className="address-form__input">
        <div className="input-group">
          <span className="input-group-addon">
            &nbsp;
            <i className={this.props.iconClass} />
            &nbsp;
          </span>
          <input
            type="text"
            id={this.props.id}
            onChange={this.props.onChange}
            onKeyPress={this.handleKeyPress}
            value={this.props.value}
            className="form-control"
            placeholder={this.props.placeholder}
            />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.props.onClick}
            >
              Clear
            </button>
          </span>
        </div>
      </div>
    );
  }
};

export default Input;
