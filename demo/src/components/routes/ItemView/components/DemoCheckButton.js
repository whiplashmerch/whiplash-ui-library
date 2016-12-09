import React, { PropTypes } from 'react';
import { CheckButton } from 'src';

const propTypes = {
  onCallback: PropTypes.func
};

export default function DemoCheckButton({ onCallback }) {
  return(
    <CheckButton onUserSelect={ onCallback } />
  );
}

DemoCheckButton.propTypes = propTypes;
