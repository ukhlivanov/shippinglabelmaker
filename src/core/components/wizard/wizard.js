import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import ProgressBar from '../progressbar';
import { stepMapping } from '../constants';
import { validatorObj } from '../utils';

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: {},
      confirmBtn: false,
      prevBtn: false,
      nextBtn: true,
      counter: 1,
      nav: true,
      wizardContext: this.props.wizardContext,
    };
  }

  stateHandler = (event) => {
    const key = event.target.getAttribute('data-id'),
      value = event.target.value;
    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }


  filterHandler = (event) => {
    const typeOfComponenent = event.target.getAttribute('data-step');
    if (typeOfComponenent === stepMapping.from || typeOfComponenent === stepMapping.to) {
      this.isNestHandler(event);
    } else if (typeOfComponenent === stepMapping.confirm) {
      this.props.onComplete(this.state.wizardContext)
    } else if (typeOfComponenent === stepMapping.weight || typeOfComponenent === stepMapping.shipping) {
      this.stateHandler(event);
    }
  }



  isNestHandler = (event) => {
    const key = event.target.getAttribute('data-id'),
      stage = event.target.getAttribute('data-step'),
      value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [stage]: {
          ...prevState.wizardContext[stage],
          [key]: value
        }
      }
    }));
  }


  previous = () => {
    this.setState({
      err: {}
    });
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,
        nextBtn: true
      });
    }
    this.navStCheck(this.state.counter - 1);
  }

  next = () => {
    const { wizardContext } = this.state;
    this.setState({
      err: {}
    });

    const currentComponentStep = Object.keys(validatorObj)[this.state.counter - 1];
    if (validatorObj[currentComponentStep]) {
      const errors = validatorObj[currentComponentStep](wizardContext[currentComponentStep]);
      if (Object.keys(errors).length) {
        this.setState({
          err: errors
        })
        return false;
      }
    }
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
        prevBtn: true,
        nextBtn:
          prevState.counter + 1 === props.steps.length ? false : true
      };
    });
  }

  navStCheck(next) {
    if (next < 2) {
      this.setState({
        prevBtn: false
      });
    }
  }


  render() {
    const Header = this.props.header;
    const ActiveComponent = this.props.steps[this.state.counter - 1];
    return (
      <div className="container">
        <Header />
        <ProgressBar
          step={this.state.counter}
          length={this.props.steps.length}
        />
        <ActiveComponent onAction={this.filterHandler} wizardContext={this.state.wizardContext} />
        <div id = 'nav'>
          <Navigation
          showPrev={this.state.prevBtn}
          showNext={this.state.nextBtn}
          next={this.next}
          prev={this.previous}
          show={this.state.nav}
        />
        </div>

        {Object.keys(this.state.err).map((key, index) => {
          const error = (key === "state") ? "You need two letters for state" : "You have " + key + " error";
          return (
            <p key={index}> {error} </p>
          )
        })}
      </div>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
