import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../../../fonts/index.css';
import './AnimatedInput.css';


export default class AnimatedInput extends Component {
  static propTypes = {
    inputLabel: PropTypes.string,
    onUserInput: PropTypes.func
  }

  static defaultProps = {
    inputLabel: '',
    onUserInput: () => console.warn('no onUserInput prop given')
  }

  state = {
    active: false,
    passVisibility: false
  }

  // PRIVATE

  _getPasswordBtn = () => {
    const { active, passVisibility } = this.state;
    const { type } = this.props;
    const BtnClass = classnames('AnimatedInput-toggle-value-btn', { active, show: passVisibility });
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

  _updateClass = () => {
    const { active } = this.state;

    if (!!active) {
      return;
    } else {
      this.setState({ active: true });
    }
  }


  render() {
    const { active } = this.state;
    const { inputLabel, onUserInput, value, ...props } = this.props;
    const InputClass = classnames('AnimatedInput', { active: !!active, value: !!value });
    const passwordBtn = this._getPasswordBtn();

    return (
      <div className={ InputClass }>
        <label className="AnimatedInput-label">
          { inputLabel }
        </label>

        <div className="AnimatedInput-wrapper">
          <input
            className="AnimatedInput-input"
            ref={ el => this.input = el }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate }
            value={ value }
            { ...props }
            placeholder=""
          />

        { passwordBtn }
        </div>
      </div>
    );
  }
}
