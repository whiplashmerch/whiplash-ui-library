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
          basic
          inputLabel="email"
          type="email"
          maxLength="220"
          placeholder="email@example.com"
          onUserInput={ onInputChange }
          required
        />
      </div>

      <div style={{ paddingTop: '1rem' }}>
        <Input
          basic
          search
          type="text"
          maxLength="222"
          placeholder="search things..."
          onUserInput={ onInputChange }
        />
      </div>

      <div style={{ paddingTop: '1rem' }}>
        <Input
          basic
          inputLabel="password"
          type="password"
          maxLength="222"
          onUserInput={ onInputChange }
        />
      </div>
    </div>
  );
}

DemoInput.propTypes = propTypes;
