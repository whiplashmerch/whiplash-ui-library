import React, { PropTypes } from 'react';
import { Toggle } from 'src';

const propTypes = {
  onChecked: PropTypes.func
};

export default function DemoToggle({ active, onChecked }) {
  return(
    <div>
      <Toggle />
      <Toggle active />
    </div>
  );
}

DemoToggle.propTypes = propTypes;
