import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './Input.css';

const propTypes = {
  inputAutoComplete: PropTypes.string,
  inputLabel: PropTypes.string,
  inputMax: PropTypes.string,
  inputType: PropTypes.string
};

const defaultProps = {
  inputAutoComplete: 'on',
  inputLabel: '',
  inputType: 'text',
  inputMax: '220'
};


export default class Input extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };

    // cache methods
    this._sendUpdate  = this._sendUpdate.bind(this);
    this._updateClass = this._updateClass.bind(this);
  }


  // PRIVATE

  _sendUpdate(e) {
    this.props.onUserInput(e.target.value);
  }

  _updateClass() {
    if (!!this.state.active) {
      return;
    } else {
      this.setState({ active: true });
    }
  }


  render() {
    const InputClass = classNames('Input', { active: this.state.active });

    return (
      <div className={ InputClass }>
        <label className="Input-label">{ this.props.inputLabel }</label>
        <div className="Input-input-wrapper">
          <input
            className="Input-input"
            type={ this.props.inputType }
            autoComplete={ this.props.inputAutoComplete }
            maxLength={ this.props.inputMax }
            required
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate } />
        </div>
      </div>
    );
  }
}


Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
