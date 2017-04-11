import React from 'react';
import PropTypes from 'prop-types';
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
