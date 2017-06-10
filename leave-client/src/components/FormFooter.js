import React, { Component } from 'react';
import ButtonTwo from './ButtonTwo';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <ButtonTwo
          title={this.props.estimationsActive ? "Cancel" : "Monitor"}
          action={
            this.props.estimationsActive
              ? () => this.props.cancelEstimations()
              : () => this.props.fetchEstimatedTravelTime()
          }
        />
        <ButtonTwo
          title="Reset"
          action={() => this.props.resetPreferencesState()}
        />
      </div>
    );
  }
};

export default Footer;
