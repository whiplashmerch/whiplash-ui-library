import React, { Component, PropTypes } from 'react';
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

        <div className="DatePicker-map-wrapper">
          <div className="DatePicker-feature">
            <header className="DatePicker-feature-header">
              <p className="DatePicker-feature-label">
                { labelText || '' }
              </p>
            </header>
            <div className="DatePicker-feature-main">
              content
            </div>
          </div>

          <div className="DatePicker-sidebar">

          </div>
        </div>
      </div>
    );
  }
}
