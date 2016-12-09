import React, { PropTypes } from 'react';
import { Legend } from 'src';

const propTypes = {
  onCallback: PropTypes.func
};

export default function DemoLegend({ onCallback }) {
  return(
    <Legend
      total="4"
      activeIndex="2"
      callback={ onCallback }
    />
  );
}

DemoLegend.propTypes = propTypes;
