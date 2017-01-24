import React, { PropTypes } from 'react';
import { NavLink } from '../../';
import '../../fonts/index.css';
import './Breadcrumb.css';

const propTypes = {
  bgColor: PropTypes.string,
  list: PropTypes.array.isRequired
};

const defaultProps = {
  bgColor: '#fff',
  list: []
};

const getItems = (usingRouter, list) => {
  const date = new Date();

  if (!!usingRouter) {
    return list.map((item, index) => (
      <li
        className="Breadcrumb-list-li"
        key={ `${ date }-${ index }` }>

        <NavLink to={ item.url } className="Breadcrumb-link">
          { item.name }
        </NavLink>
      </li>
    ));
  } else {
    return list.map((item, index) => (
      <li
        className="Breadcrumb-list-li"
        key={ `${ date }-${ index }` }>

        <a href={ item.url } className="Breadcrumb-link">
          { item.name }
        </a>
      </li>
    ));
  }
};


export default function Breadcrumb({ bgColor, list, router }) {
  const listItems = !!list.length ? getItems(router, list) : null;
  const bgStyle   = { backgroundColor: bgColor };

  if (!!!list.length) {
    return null;
  }

  return(
    <div className="Breadcrumb" style={ bgStyle }>
      <ul className="Breadcrumb-list">
        { listItems }
      </ul>
    </div>
  );
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
