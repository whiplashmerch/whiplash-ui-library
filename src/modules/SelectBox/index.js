import React, { Component, PropTypes } from 'react';
import './SelectBox.css';


export default class SelectBox extends Component {
  static propTypes = {
    callback: PropTypes.func,
    form: PropTypes.bool,
    list: PropTypes.array
  }

  static defaultProps = {
    form: false,
    list: []
  }

  state = {
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

  _getSelection = () => {
    const { selected } = this.state;

    if (!!!selected) {
      return null;
    }

    return(
      <div className="SelectBox-selection">
        { selected }
      </div>
    );
  }

  _selectItem = (selected) => {
    const { callback } = this.props;

    this.setState({ selected }, () => {
      callback(selected);
    })
  }


  render() {
    const { list } = this.props;
    const formInput = this._getFormContent();
    const selection = this._getSelection();
    const listItems = this._getList();

    if (!!!list.length) {
      return null;
    }

    return(
      <div className="SelectBox">
        { formInput }

        { selection }

        <div className="SelectBox-list-wrapper">
          <ul className="SelectBox-ul">
            { listItems }
          </ul>
        </div>
      </div>
    );
  }
}
