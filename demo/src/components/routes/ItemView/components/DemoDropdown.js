import React, { PropTypes } from 'react';
import {
  Button,
  Dropdown,
  NavLink
} from 'src';

const propTypes = {
  open: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default function DemoDropdown({ open, onUpdate }) {
  const containerStyles = {
    display: 'inline-block',
    position: 'relative'
  };

  return(
    <div style={ containerStyles }>
      <Button
        buttonText="settings"
        theme="text"
        callback={ onUpdate }
      />

      <Dropdown
        right
        open={ open }
      >
        <NavLink to="/">home</NavLink>
        <NavLink to="/button">button</NavLink>
        <p>Normal text</p>
      </Dropdown>
    </div>
  );
}

DemoDropdown.propTypes = propTypes;
