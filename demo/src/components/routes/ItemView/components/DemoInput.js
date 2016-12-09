import React, { PropTypes } from 'react';
import { Input } from 'src';

const propTypes = {
  onInputChange: PropTypes.func
};

export default function DemoInput({ onInputChange }) {
  return(
    <Input
      inputLabel="name"
      type="text"
      maxLength="220"
      onUserInput={ onInputChange }
      required
    />
  );
}

DemoInput.propTypes = propTypes;
