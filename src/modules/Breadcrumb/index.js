import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { AppHelpers } from '../../../classes';
import { NavLink } from '../';
import './Breadcrumb.css';

const propTypes = {
  list: PropTypes.array.isRequired
};

const defaultProps = {
  list: []
};


export default class Breadcrumb extends Component {
  constructor() {
    super();

    this._getItems = this._getItems.bind(this);
  }

  // PRIVATE

  _getItems() {
    return this.props.list.map((item, index) => (
      <li
        className="Breadcrumb-item"
        key={ `${ AppHelpers.Timestamp }-${ index }` }>

        <NavLink to={ item.url } className="Breadcrumb-link">
          { item.name }
        </NavLink>
      </li>
    ));
  }


  render() {
    const items = !!this.props.list.length ? this._getItems() : null;
    const BreadcrumbClass = classNames('Breadcrumb', { hidden: !!!this.props.list.length });

    return (
      <div className={ BreadcrumbClass }>
        <ul className="Breadcrumb-list">
          { items }
        </ul>
      </div>
    );
  }
}


Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
