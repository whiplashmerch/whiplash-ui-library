import React, { PropTypes } from 'react';
import { Input } from 'src';

const propTypes = {
  onInputChange: PropTypes.func
};

export default function DemoInput({ onInputChange }) {
  return(
    <div>
      <Input
        inputLabel="name"
        type="text"
        maxLength="220"
        onUserInput={ onInputChange }
        required
      />

      <div style={{ paddingTop: '1rem' }}>
        <Input
          inputLabel="email"
          type="email"
          theme="basic"
          maxLength="220"
          placeholder="email@example.com"
          onUserInput={ onInputChange }
          required
        />
      </div>
    </div>
  );
}

DemoInput.propTypes = propTypes;
