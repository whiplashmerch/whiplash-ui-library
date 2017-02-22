import React, { Component, PropTypes } from 'react';
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
    active: false
  }

  // PRIVATE

  _sendUpdate = (e) => {
    const { onUserInput } = this.props;
    onUserInput(e.target.value);
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
    const { inputLabel, onUserInput, ...props } = this.props;
    const InputClass = classnames('AnimatedInput', { active: !!active });

    return (
      <div className={ InputClass }>
        <label className="AnimatedInput-label">
          { inputLabel }
        </label>

        <div className="AnimatedInput-wrapper">
          <input
            className="AnimatedInput-input"
            placeholder=""
            { ...props }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate } />
        </div>
      </div>
    );
  }
}
