import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ValidComponentChildren } from '../../utils';

import '../../fonts/index.css';
import './Dropdown.css';


const propTypes = {
  left: PropTypes.bool,
  open: PropTypes.bool,
  right: PropTypes.bool
};

const defaultProps = {
  left: false,
  open: false,
  right: false
};

const getItems = (childComponents) => {
  return ValidComponentChildren.map(childComponents, child => (
    <li className="Dropdown-li">
      { child }
    </li>
  ))
};


export default function Dropdown({ children, left, open, right }) {
  const MainClass = classnames('Dropdown', 'animated', 'fadeIn', { left, right });
  const items = getItems(children);

  if (!open) {
    return null;
  }

  return(
    <div className={ MainClass }>
      <ul className="Dropdown-ul">
        { items }
      </ul>
    </div>
  );
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
