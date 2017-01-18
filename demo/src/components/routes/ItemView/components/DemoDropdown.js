import React, { PropTypes } from 'react';
import { Button, Dropdown } from 'src';

const propTypes = {
  open: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default function DemoDropdown({ open, onUpdate }) {
  return(
    <div>
      <Button
        buttonText="settings"
        theme="text"
        callback={ onUpdate }
      />

      <Dropdown
        right
        open={ open }
      >
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
      </Dropdown>
    </div>
  );
}

DemoDropdown.propTypes = propTypes;
