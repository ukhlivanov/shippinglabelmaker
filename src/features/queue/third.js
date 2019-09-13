import React from 'react';
import PropTypes from 'prop-types';
import {stepMapping} from '../../core/components/constants';

export default class Third extends React.Component {
  render() {
    const { onAction, wizardContext: {weight} } = this.props;
    return (
      <div>
        <h6>Please, enter package's weight</h6>
        <div className="row">
          <div className="six columns">
            <input
              className="u-full-width"
              placeholder="Weight"
              data-id="weight"
              data-step={stepMapping.weight}
              type="number"
              onChange={onAction}
              value={weight}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  }
}

Third.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
