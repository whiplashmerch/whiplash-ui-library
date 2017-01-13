import React, { PropTypes } from 'react';
import { CheckButton } from 'src';

const propTypes = {
  defaultChecked: PropTypes.bool
};

export default function DemoCheckButton({ onCallback }) {
  return(
    <div>
      <CheckButton defaultChecked />
      <CheckButton />
      <CheckButton />
    </div>
  );
}

DemoCheckButton.propTypes = propTypes;
