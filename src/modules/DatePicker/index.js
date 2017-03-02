import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import DayPicker from './components/DayPicker';

import './DatePicker.css';



export default class DatePicker extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    onDayClick: PropTypes.func
  }

  static defaultProps = {
    labelText: null
  }

  state = {
    active: false,
    inputValue: ''
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

  _updateInputValue = (e, day) => {
    const { onDayClick } = this.props;

    this.setState(prevState => ({
      active: !prevState.active,
      inputValue: day.format('MMM Do Y')
    }), () => {
      onDayClick(e, day);
    })
  }


  render() {
    const { active, inputValue } = this.state;
    const { labelText, onDayClick, ...props } = this.props;

    const label = this._getLabel();


    return(
      <div className="DatePicker">
        <div className="DatePicker-input-wrapper">
          { label }

          <input
            className="DatePicker-input"
            onClick={ this._toggleActiveState }
            placeholder={ !!!inputValue ? 'select date' : '' }
            ref={ ref => this.inputRef = ref }
            type="text"
            value={ inputValue }
            readOnly={ active }
            { ...props }
          />
        </div>

        <DayPicker
          active={ active }
          infoHeader={ labelText }
          onDayClick={ this._updateInputValue }
        />
      </div>
    );
  }
}
