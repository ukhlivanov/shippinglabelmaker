import React from 'react';
import PropTypes from 'prop-types';
import { getshippingOption, getShippingRate } from '../../core/components/utils';
import {stepMapping} from '../../core/components/constants';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.wizardContext;
  }

  gettoFrom(keye) {
    return Object.keys(this.state[keye]).map((val, i) => {
      return (
        <li key={i}>
          {' '}
          {val} : {this.state[keye][val]}{' '}
        </li>
      );
    });
  }

  getShippingCost() {
    return (
      <span>
        {' '}
        {getShippingRate(this.state.weight, this.state.shippingOption)}{' '}
      </span>
    );
  }

  getshippingOption() {
    return getshippingOption(this.state.shippingOption);
  }

  render() {
    return (
      <div>
        <p> From Information </p>
        <ul>{this.gettoFrom(stepMapping.from)}</ul>
        <p> To Information </p>
        <ul>{this.gettoFrom(stepMapping.to)}</ul>
        <p> Shipping Information </p>
        <h6 id='shipp'> Shipping Weight: {this.state.weight} </h6>
        <h6 id='shipp'> Shipping Method: {this.getshippingOption()} </h6>
        <h6 id='shipp'> Shipping Cost: {this.getShippingCost()} </h6>
        <br></br>
        <button data-step={stepMapping.confirm} onClick={this.props.onAction}>Confirm</button>
        <br></br>

      </div>
    );
  }
}

Confirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
