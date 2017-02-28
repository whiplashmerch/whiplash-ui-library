import React, { Component, PropTypes } from 'react';
import './DatePicker.css';


export default class DatePicker extends Component {
  static propTypes = {
    labelText: PropTypes.string
  }

  static defaultProps = {
    labelText: null
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

  _toggleMap = () => {
    console.log('toggle map');
  }

  render() {
    const { labelText, ...props } = this.props;
    const label = this._getLabel();

    return(
      <div className="DatePicker">
        <div className="DatePicker-input-wrapper">
          { label }

          <input
            { ...props }
            className="DatePicker-input"
            onClick={ this._toggleMap }
            placeholder="select date"
            ref={ ref => this.inputRef = ref }
            type="text"
            value=""
            readOnly
          />
        </div>

        <div className="DatePicker-map-wrapper">

        </div>
      </div>
    );
  }
}
