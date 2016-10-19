import React, { Component } from 'react';
import NavLink from '../NavLink';
import FetchHelper from '../../classes/FetchHelper';
import logo from './whiplash-geo-logo-blue.svg';
import LibraryData from '../../library.json';
import './MainIndex.css';


export default class MainIndex extends Component {
  constructor() {
    super();

    this.state = {
      links: LibraryData
    };

    // cache methods
    this._getLinks = this._getLinks.bind(this);
  }


  // PRIVATE

  _getLinks() {
    return this.state.links.map((item, index) => {
      return (
        <li key={ index }>
          <NavLink to={ `/library/${ item.name }` } className="NavLink">
            { item.name }
          </NavLink>
        </li>
      );
    });
  }


  render() {
    const links = this._getLinks();

    return (
      <div className="MainIndex clearfix">
        <header className="MainIndex-header">
          <div className="MainIndex-logo-wrapper">
            <img className="MainIndex-logo" src={ logo } alt="whiplash-logo" />
          </div>
        </header>

        <div className="MainIndex-sidebar">
          <nav>
            <ul>
              { links }
            </ul>
          </nav>
        </div>

        <div className="MainIndex-feature">
          { this.props.children }
        </div>
      </div>
    );
  }

}
