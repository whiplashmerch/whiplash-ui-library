import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import InputStyles from './styles.js';

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
    const labelStyles = css(
      !this.state.active ? InputStyles.label : [InputStyles.label, InputStyles.activeLabel]
    );

    const wrapperStyles = css(
      !this.state.active ? InputStyles.wrapper : [InputStyles.wrapper, InputStyles.activeWrapper]
    );


    return (
      <div className={ css([InputStyles.main]) }>
        <label className={ labelStyles }>
          { this.props.inputLabel }
        </label>

        <div className={ wrapperStyles }>
          <input
            className={ css(InputStyles.input) }
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
