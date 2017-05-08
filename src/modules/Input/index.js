import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AnimatedInput from './components/AnimatedInput';

import '../../fonts/index.css';
import './Input.css';


export default class Input extends Component {
  static propTypes = {
    basic: PropTypes.bool,
    inputLabel: PropTypes.string,
    noAnimation: PropTypes.bool,
    onUserInput: PropTypes.func,
    search: PropTypes.bool
  }

  static defaultProps = {
    basic: false,
    inputLabel: '',
    noAnimation: false,
    onUserInput: () => console.warn('no onUserInput prop given'),
    search: false
  }

  state = {
    passVisibility: false
  }

  // PRIVATE

  _getPasswordBtn = () => {
    const { passVisibility } = this.state;
    const { type } = this.props;
    const BtnClass = classnames('Input-toggle-value-btn', { show: passVisibility });
    const BtnText  = passVisibility ? 'hide' : 'show';

    if (type === 'password') {
      return(
        <span
          className={ BtnClass }
          onClick={ this._toggleVisibility }
        >
          { BtnText }
        </span>
      );
    }

    return null;
  }

  _sendUpdate = (e) => {
    const { onUserInput } = this.props;
    onUserInput(e.target.value);
  }

  _toggleInputType = () => {
    const currentType = this.input.type;

    switch (currentType) {
      case 'password':
        this.input.type = 'text';
        break;
      case 'text':
        this.input.type = 'password';
        break;
      default:
        return;
    }
  }

  _toggleVisibility = () => {
    this.setState(prevState => ({
      passVisibility: !prevState.passVisibility
    }), () => {
      this._toggleInputType();
    });
  }


  render() {
    const {
      basic,
      inputLabel,
      noAnimation,
      onUserInput,
      search,
      ...props
    } = this.props;

    const MainClass = classnames('Input', { search });
    const passwordBtn = this._getPasswordBtn();


    if (!basic) {
      return(
        <AnimatedInput
          noAnimation={ noAnimation }
          inputLabel={ inputLabel }
          onUserInput={ onUserInput }
          { ...props }
        />
      );
    }


    return (
      <div className={ MainClass }>
        <label className="Input-label">
          { inputLabel }
        </label>

        <div className="Input-wrapper">
          <input
            className="Input-input"
            { ...props }
            ref={(el) => this.input = el }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate }
          />

          { passwordBtn }
        </div>
      </div>
    );
  }
}
