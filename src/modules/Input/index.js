import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AnimatedInput from './components/AnimatedInput';
import '../../fonts/index.css';
import './Input.css';


export default class Input extends Component {
  static propTypes = {
    basic: PropTypes.bool,
    inputLabel: PropTypes.string,
    onUserInput: PropTypes.func,
    search: PropTypes.bool
  }

  static defaultProps = {
    basic: false,
    inputLabel: '',
    onUserInput: () => console.warn('no onUserInput prop given'),
    search: false
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
      search,
      ...props
    } = this.props;

    const MainClass = classnames('Input', { search });


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
      <div className={ MainClass }>
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
