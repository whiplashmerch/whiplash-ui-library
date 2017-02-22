import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AnimatedInput from './components/AnimatedInput';
import '../../fonts/index.css';
import './Input.css';


export default class Input extends Component {
  static propTypes = {
    basic: PropTypes.bool,
    inputLabel: PropTypes.string,
    onUserInput: PropTypes.func
  }

  static defaultProps = {
    basic: false,
    inputLabel: '',
    onUserInput: () => console.warn('no onUserInput prop given')
  }

  // PRIVATE

  _sendUpdate = (e) => {
    const { onUserInput } = this.props;
    onUserInput(e.target.value);
  }


  render() {
    const {
      basic,
      inputLabel,
      onUserInput,
      ...props
    } = this.props;


    if (!basic) {
      return(
        <AnimatedInput
          inputLabel={ inputLabel }
          onUserInput={ onUserInput }
          { ...props }
        />
      );
    }


    return (
      <div className="Input">
        <label className="Input-label">
          { inputLabel }
        </label>

        <div className="Input-wrapper">
          <input
            className="Input-input"
            { ...props }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate } />
        </div>
      </div>
    );
  }
}
