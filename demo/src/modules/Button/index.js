import React, { Component, PropTypes } from 'react';
import './Button.css';


const propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  callback: PropTypes.func,
  theme: PropTypes.string
};

const defaultProps = {
  buttonText: '',
  buttonType: 'button',
  callback: () => { return; },
  theme: ''
};


export default class Button extends Component {
  constructor() {
    super();

    // cache methods
    this._triggerCallback = this._triggerCallback.bind(this);
  }


  // PRIVATE

  _triggerCallback(e) {
    this.props.callback(e);
  }


  render() {
    return (
      <button type={ this.props.buttonType }
        className={ `Button ${ this.props.theme }` }
        onClick={ this._triggerCallback }>
        { this.props.buttonText }
      </button>
    );
  }
}


// default props
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
