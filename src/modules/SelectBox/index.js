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
    value: PropTypes.oneOfType(['number', 'string'])
  }

  static defaultProps = {
    callback: () => console.log('please provide a callback function to <SelectBox />'),
    form: false,
    label: null,
    value: null
  }

  state = {
    open: false,
    selected: '',
    selectedValue: ''
  }

  componentDidMount() {
    const { children, value } = this.props;
    if (!this._childrenValid()) {
      const message = 'Children must have a "value" property when using the <SelectBox /> component';
      return console.error(message);
    }

    if (value) {
      this._handleControlledValue(children, value);
    }
  }

  componentWillReceiveProps({ children, value }) {
    // controlled component:
    // if component receives a new value, change appropriately
    if (value !== this.props.value) {
      this._handleControlledValue(children, value);
    }

  }

  // PRIVATE

  _childrenValid = () => {
    const { children } = this.props;
    let childrenValid = true;

    if (!children.length) {
      return false
    }

    children.forEach(child => {
      if (!!!child.props.value) {
        childrenValid = false;
      }
    });

    return childrenValid;
  }

  _handleControlledValue = (children, value) => {
    const selectedChild = children.filter(child => {
      return child.props.value.toString() === value.toString();
    });
    this.setState({
      selected: selectedChild[0].props.children,
      selectedValue: selectedChild[0].props.value
    });
  }

  _getFormContent = () => {
    const { selectedValue } = this.state;
    const { form, callback, ...props } = this.props;

    if (!!!form) {
      return null;
    }

    const newProps = {
      ...props,
      children: undefined,
      value: undefined
    };

    return(
      <input
        type="hidden"
        value={ selectedValue }
        { ...newProps }
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

    return children.map((child, index) => (
      <li
        className="SelectBox-li"
        key={ `${ new Date() }-${ index }` }
        onClick={ () => this._selectItem(child) }
      >
        { child }
      </li>
    ))
  }

  _selectItem = (selected) => {
    const { callback } = this.props;
    const isControlled = this.props.value;
    const currentSelected = this.state.selected;
    const currentValue = this.state.selectedValue;
    //TODO: may need a text property here in the future
    const text = selected.props.children;
    const value = selected.props.value || selected.props.children;
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

  render() {
    const { open, selected } = this.state;
    const { children } = this.props;
    const MainClass = classnames('SelectBox', { open });
    const formInput = this._getFormContent();
    const labelContent = this._getLabelContent();
    const optionsContent = this._getOptionsContent();

    if (!!!children.length) {
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
