import React, { Component, PropTypes } from 'react';
import '../../fonts/index.css';
import classnames from 'classnames';
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
    const optionsContent = this._getOptionsContent();

    if (!!!list.length) {
      return null;
    }

    return(
      <div className={ MainClass }>
        { formInput }

        <div className="SelectBox-selection" onClick={ this._showOptions }>
          { selected || 'choose option' }
        </div>

        { optionsContent }
      </div>
    );
  }
}
