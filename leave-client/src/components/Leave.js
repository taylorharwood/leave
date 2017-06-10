import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import VitalsContainer from '../containers/VitalsContainer';
import AddressFormContainer from '../containers/AddressFormContainer';

class Leave extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VitalsContainer />
        <AddressFormContainer />
      </div>
    );
  }
};

export default Leave;
