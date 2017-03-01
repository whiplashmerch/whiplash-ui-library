import React, { PropTypes } from 'react';
import { DatePicker } from 'src';

const propTypes = {
  active: PropTypes.string,
  onCallback: PropTypes.func
};


export default function DemoBreadcrumb({ active, onCallback }) {
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

DemoBreadcrumb.propTypes = propTypes;
