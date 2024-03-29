import React from 'react';
import PropTypes from 'prop-types';
import {stepMapping} from '../../core/components/constants';

export default class Second extends React.Component {
  render() {
    const { onAction, wizardContext: {to} } = this.props;
    return (
      <div>
        <h6>Please, enter the receiver's address</h6>
        <div className="row">
          <div className="six columns">
            <input
              className="u-full-width"
              placeholder="First Name"
              data-id="name"
              type="text"
              data-step={stepMapping.to}
              onChange={onAction}
              value={to.name}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <input
              className="u-full-width"
              placeholder="Street"
              data-id="street"
              type="text"
              data-step={stepMapping.to}
              onChange={onAction}
              value={to.street}
            />
          </div>
        </div>
        <div className="row columns">
          <input
            className="small"
            placeholder="City"
            data-id="city"
            type="text"
            data-step={stepMapping.to}
            onChange={onAction}
            value={to.city}
          />
          <input
            className="small"
            placeholder="state"
            data-id="state"
            type="text"
            data-step={stepMapping.to}
            onChange={onAction}
            value={to.state}
          />
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            type="text"
            data-step={stepMapping.to}
            onChange={onAction}
            value={to.zip}
          />
        </div>
      </div>
    );
  }
}

Second.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
