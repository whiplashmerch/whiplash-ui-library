import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ValidComponentChildren } from '../../utils';

import '../../fonts/index.css';
import './SelectBox.css';


export default class SelectBox extends Component {
  static propTypes = {
    callback: PropTypes.func,
    form: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  static defaultProps = {
    callback: () => console.log('add a callback prop to <SelectBox />'),
    form: false,
    label: null,
    value: null
  }

  state = {
    open: false,
    selected: '',
    selectedValue: this.props.value || ''
  }

  componentDidMount() {
    const { value } = this.props;

    if (!!value) {
      this._handleControlledValue();
    }
  }

  componentWillReceiveProps({ children, value }) {
    // controlled component:
    // if component receives a new value, change appropriately
    if (!!value && (value !== this.props.value)) {
      this._handleControlledValue(children, value);
    }

  }

  // PRIVATE

  _handleControlledValue = (children = this.props.children, value = this.props.value) => {
    const selectedChild = ValidComponentChildren.find(children, child => (
      String(child.props.value) === String(value)
    ));

    if (!!!selectedChild) {
      return;
    }

    this.setState({
      selected: selectedChild.props.children,
      selectedValue: selectedChild.props.value
    });
  }

  _getFormContent = () => {
    const { selectedValue } = this.state;
    const { form, callback, children, ...props } = this.props;

    if (!!!form) {
      return null;
    }

    return(
      <input
        { ...props }
        type="hidden"
        value={ selectedValue || '' }
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
    const { children } = this.props;

    return ValidComponentChildren.map(children, child => (
      <li
        className="SelectBox-li"
        onClick={ () => this._selectItem(child) }
      >
        { child }
      </li>
    ))
  }

  _selectItem = (selected, e) => {
    const { callback } = this.props;
    const isControlled = this.props.value;
    const currentSelected = this.state.selected;
    const currentValue = this.state.selectedValue;
    const text = selected.props.children;
    const hasValue = selected.props.value || selected.props.value === 0 ? true : false
    const value = hasValue ? selected.props.value.toString() : selected.props.children;
    const obj = { target: { value, text } };

    this.setState({
      open: false,
      selected: !!isControlled ? currentSelected : text,
      selectedValue: !!isControlled ? currentValue: value
    }, () => {
      callback(obj);
    })
  }

  _showOptions = () => {
    this.setState({ open: true });
  }

  _closeOptions = () => {
    this.setState({ open: false });
  }

  render() {
    const { open, selected } = this.state;
    const { children } = this.props;
    const MainClass = classnames('SelectBox', { open });
    const formInput = this._getFormContent();
    const labelContent = this._getLabelContent();
    const optionsContent = this._getOptionsContent();

    return(
      <div className={ MainClass } tabIndex="0" onBlur={ this._closeOptions }>
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
