import React, { PropTypes } from 'react';
import { DatePicker } from 'src';

const propTypes = {
  active: PropTypes.string
};


export default function DemoBreadcrumb({ active }) {
  return(
    <DatePicker />
  );
}

DemoBreadcrumb.propTypes = propTypes;
