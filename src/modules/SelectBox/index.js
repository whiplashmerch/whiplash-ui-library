import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../fonts/index.css';
import './SelectBox.css';


export default class SelectBox extends Component {
  static propTypes = {
    callback: PropTypes.func,
    form: PropTypes.bool,
    label: PropTypes.string,
    list: PropTypes.array
  }

  static defaultProps = {
    form: false,
    label: null,
    list: []
  }

  state = {
    open: false,
    selected: ''
  }

  // PRIVATE

  _getFormContent = () => {
    const { selected } = this.state;
    const { form, list, callback, ...props } = this.props;

    if (!!!form) {
      return null;
    }

    return(
      <input
        type="hidden"
        value={ selected }
        { ...props }
      />
    );
  }

  _getOptionsContent = () => {
    const { open } = this.state;
    const listItems = this._getList();

    if (!open) {
      return null;
    }

    return(
      <div className="SelectBox-list-wrapper animated fadeIn">
        <ul className="SelectBox-ul">
          { listItems }
        </ul>
      </div>
    );
  }

  _getLabelContent = () => {
    const { label } = this.props;

    if (!!!label) {
      return null;
    }

    return(
      <label className="SelectBox-label">
        { label }
      </label>
    );
  }

  _getList = () => {
    const { list } = this.props;

    return list.map((item, index) => (
      <li
        className="SelectBox-li"
        key={ `${ new Date() }-${ index }` }
        onClick={ () => this._selectItem(item) }
      >
        { item }
      </li>
    ))
  }

  _selectItem = (selected) => {
    const { callback } = this.props;

    this.setState({
      open: false,
      selected
    }, () => {
      callback(selected);
    })
  }

  _showOptions = () => {
    this.setState({ open: true });
  }


  render() {
    const { open, selected } = this.state;
    const { list } = this.props;
    const MainClass = classnames('SelectBox', { open });
    const formInput = this._getFormContent();
    const labelContent = this._getLabelContent();
    const optionsContent = this._getOptionsContent();

    if (!!!list.length) {
      return null;
    }

    return(
      <div className={ MainClass }>
        { labelContent }

        <div className="SelectBox-wrapper">
          { formInput }

          <div className="SelectBox-selection" onClick={ this._showOptions }>
            { selected || 'choose option' }
          </div>

          { optionsContent }
        </div>
      </div>
    );
  }
}
