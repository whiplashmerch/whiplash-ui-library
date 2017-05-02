import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dropdown,
  NavLink
} from 'src';

const propTypes = {
  open: PropTypes.bool,
  onUpdate: PropTypes.func
};

const getOthers = () => {
  const items = ['Plain text', 'another plain text'];

  return items.map((item, index) => (
    <p key={ `${ new Date() }-${ index }` }>
      { item }
    </p>
  ));
}


export default function DemoDropdown({ open, onUpdate }) {
  const others = getOthers();

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
        <NavLink to="/library/Button">button</NavLink>
        { others }
      </Dropdown>

    </div>
  );
}

DemoDropdown.propTypes = propTypes;
