import React from 'react';
import PropTypes from 'prop-types';
import {stepMapping, shippingOptionObj} from '../../core/components/constants';


export default class Fourth extends React.Component {
  render() {
    const { onAction, wizardContext: {shippingOption} } = this.props;
    return (
      <div>
        <h4>Plase, select delivery option</h4>
        <div className="row">
          <div className="six columns">
            <select
              onChange={onAction}
              value={shippingOption}
              data-id="shippingOption"
              data-step={stepMapping.shipping}
            >
              <option value={shippingOptionObj.ground}>
                Ground
              </option>
              <option value={shippingOptionObj.priority}>Express</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Fourth.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
