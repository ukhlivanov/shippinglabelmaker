import React from 'react';
import PropTypes from 'prop-types';
import {stepMapping} from '../../core/components/constants';

export default class First extends React.Component {
  render() {
    const { onAction, wizardContext: {from} } = this.props;
    return (
      <div className = 'main-box'>
        <h4>Please, enter From address:</h4>
        <div className="row">
          <div className="six columns">
            <input
              className="u-full-width"
              placeholder="Name"
              data-id="name"
              data-step={stepMapping.from}
              type="text"
              onChange={onAction}
              value={from.name}
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
              data-step={stepMapping.from}
              type="text"
              onChange={onAction}
              value={from.street}
            />
          </div>
        </div>
        <div className="row columns">
          <input
            className="small"
            placeholder="City"
            data-id="city"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.city}
          />
          <input
            className="small"
            placeholder="state"
            data-id="state"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.state}
          />
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.zip}
          />
        </div>
      </div>
    );
  }
}

First.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
