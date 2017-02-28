import React, { Component, PropTypes } from 'react';
import './DatePicker.css';


export default class DatePicker extends Component {

  // PRIVATE

  _toggleMap = () => {
    console.log('toggle map');
  }

  render() {
    const { ...props } = this.props;

    return(
      <div className="DatePicker">
        <div className="DatePicker-input-wrapper">
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
