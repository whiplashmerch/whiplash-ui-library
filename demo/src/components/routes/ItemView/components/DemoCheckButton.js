import React from 'react';
import PropTypes from 'prop-types';
import { CheckButton } from 'src';

const propTypes = {
  defaultChecked: PropTypes.bool
};

export default function DemoCheckButton({ defaultChecked }) {
  return(
    <div>
      <CheckButton defaultChecked name="test" />
      <CheckButton name="test" />
      <CheckButton name="test" />
    </div>
  );
}

DemoCheckButton.propTypes = propTypes;
