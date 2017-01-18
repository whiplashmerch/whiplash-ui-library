import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Dropdown.css';

const propTypes = {
  children: PropTypes.array,
  left: PropTypes.bool,
  open: PropTypes.bool,
  right: PropTypes.bool
};

const defaultProps = {
  left: false,
  open: false,
  right: false
};


export default function Dropdown({ children, left, open, right }) {
  const MainClass = classnames('Dropdown', 'animated', 'fadeIn', { left, right });

  if (!open) {
    return null;
  }

  return(
    <div className={ MainClass }>
      <ul className="Dropdown-ul">
        { children }
      </ul>
    </div>
  );
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
