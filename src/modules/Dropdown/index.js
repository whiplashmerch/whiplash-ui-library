import React, { PropTypes } from 'react';
import classnames from 'classnames';
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
  const date = new Date();

  if (!!childComponents.length) {
    return childComponents.map((item, index) => (
      <li
        key={ `${ date }-${ index }` }
        className="Dropdown-li"
      >
        { item }
      </li>
    ));
  } else {
    return(
      <li className="Dropdown-li">
        { childComponents }
      </li>
    );
  }
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
