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
    providedValues: false,
    selected: ''
  }

  componentDidMount() {
    this._checkTextValue();
  }


  // PRIVATE

  _checkTextValue = () => {
    const { list } = this.props;
    if (!!list.length) {
      if (typeof list[0] === 'object') {
        if ('value' in list[0] && 'text' in list[0]) {
          this.setState({ providedValues: true });
        }
      }
    }
  }

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
    const { providedValues } = this.state;
    const { list } = this.props;
    const thisList = providedValues ? list.map(item => item.text) : list;

    return thisList.map((item, index) => (
      <li
        className="SelectBox-li"
        key={ `${ new Date() }-${ index }` }
        onClick={ () => this._selectItem(item) }
      >
        { item }
      </li>
    ))
  }

  _getItemValue = (selected) => {
    const { list } = this.props;
    const index = list.map(item => item.text).indexOf(selected);
    return list[index].value;
  }

  _selectItem = (selected) => {
    const { callback, list } = this.props;
    const { providedValues } = this.state;
    const value = providedValues ? this._getItemValue(selected) : null;

    this.setState({
      open: false,
      selected
    }, () => {
      callback(selected, value);
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
