import React, { PropTypes } from 'react';
import { DatePicker } from 'src';

const propTypes = {
  active: PropTypes.string
};


export default function DemoBreadcrumb({ active }) {
  return(
    <div>
      <DatePicker
        labelText="from"
      />

      <DatePicker
        labelText="to"
      />
    </div>
  );
}

DemoBreadcrumb.propTypes = propTypes;
