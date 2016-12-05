import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import 'src/fonts/index.css';
import './Input.css';

const propTypes = {
  inputLabel: PropTypes.string,
  onUserInput: PropTypes.func
};

const defaultProps = {
  inputLabel: '',
  onUserInput: () => console.log('no onUserInput prop given')
};


export default class Input extends Component {
  constructor() {
    super();

    // cache methods
    this._sendUpdate  = this._sendUpdate.bind(this);
    this._updateClass = this._updateClass.bind(this);

    this.state = {
      active: false
    };
  }


  // PRIVATE

  _sendUpdate(e) {
    const { onUserInput } = this.props;
    onUserInput(e.target.value);
  }

  _updateClass() {
    const { active } = this.state;

    if (!!active) {
      return;
    } else {
      this.setState({ active: true });
    }
  }


  render() {
    const { active } = this.state;
    const { inputLabel, ...props } = this.props;
    const InputClass = classnames('Input', { active: !!active });

    return (
      <div className={ InputClass }>
        <label className="Input-label">
          { inputLabel }
        </label>

        <div className="Input-wrapper">
          <input
            className="Input-input"
            placeholder=""
            { ...props }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate } />
        </div>
      </div>
    );
  }
}


Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
