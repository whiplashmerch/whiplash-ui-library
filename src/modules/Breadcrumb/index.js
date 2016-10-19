import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';
import { NavLink } from '../../';
import BreadcrumbStyles from './styles';

const propTypes = {
  bgColor: PropTypes.string,
  list: PropTypes.array.isRequired
};

const defaultProps = {
  bgColor: '#F9F9FA',
  list: []
};


export default class Breadcrumb extends Component {
  constructor() {
    super();

    this._getItems = this._getItems.bind(this);
  }

  // PRIVATE

  _getItems() {
    const date = new Date();

    if (!!this.props.router) {
      return this.props.list.map((item, index) => (
        <li
          className={ css(BreadcrumbStyles.item) }
          key={ `${ date }-${ index }` }>

          <NavLink to={ item.url } className={ css(BreadcrumbStyles.link) }>
            { item.name }
          </NavLink>
        </li>
      ));
    } else {
      return this.props.list.map((item, index) => (
        <li
          className={ css(BreadcrumbStyles.item) }
          key={ `${ date }-${ index }` }>

          <a href={ item.url } className={ css(BreadcrumbStyles.link) }>
            { item.name }
          </a>
        </li>
      ));
    }
  }


  render() {
    const items = !!this.props.list.length ? this._getItems() : null;
    const bgStyle = { backgroundColor: this.props.bgColor };

    return (
      <div className={ css(BreadcrumbStyles.main) } style={ bgStyle }>
        <ul className={ css(BreadcrumbStyles.list) }>
          { items }
        </ul>
      </div>
    );
  }
}


Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
