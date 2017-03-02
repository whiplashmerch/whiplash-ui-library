import React, { PropTypes } from 'react';
import { DatePicker } from 'src';

const propTypes = {
  active: PropTypes.string,
  onCallback: PropTypes.func
};


export default function DemoDatePicker({ active, onCallback }) {
  return(
    <div>
      <DatePicker
        labelText="from"
        onDayClick={ onCallback }
      />

      <DatePicker
        labelText="to"
        onDayClick={ onCallback }
      />
    </div>
  );
}

DemoDatePicker.propTypes = propTypes;
