import React, { Component, PropTypes } from 'react';
import DayPicker from './components/DayPicker';
import './DatePicker.css';



export default class DatePicker extends Component {
  static propTypes = {
    labelText: PropTypes.string
  }

  static defaultProps = {
    labelText: null
  }

  state = {
    active: false
  }

  // PRIVATE

  _getLabel = () => {
    const { labelText } = this.props;

    if (!!!labelText) {
      return null;
    }

    return(
      <label className="DatePicker-label">
        { labelText }
      </label>
    );
  }

  _toggleActiveState = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const { active } = this.state;
    const { labelText, ...props } = this.props;
    const label = this._getLabel();

    return(
      <div className="DatePicker">
        <div className="DatePicker-input-wrapper">
          { label }

          <input
            className="DatePicker-input"
            onClick={ this._toggleActiveState }
            placeholder="select date"
            ref={ ref => this.inputRef = ref }
            type="text"
            value=""
            readOnly
            { ...props }
          />
        </div>

        <DayPicker
          active={ active }
          infoHeader={ labelText }
        />
      </div>
    );
  }
}
