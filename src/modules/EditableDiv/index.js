import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DotLoader from '../DotLoader';
import Input from '../Input';
import SuccessAnimation from './components/SuccessAnimation';

import './EditableDiv.css';


export default class EditableDiv extends Component {
  static propTypes = {
    dataId: PropTypes.number,
    divContent: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    theme: PropTypes.string,
    type: PropTypes.string,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    dataId: null,
    divContent: 'no content',
    name: '',
    readOnly: false,
    theme: null,
    type: 'text',
    onUpdate: () => console.log('add onUpdate prop')
  }

  state = {
    isEditing: false,
    showSaved: false,
    textChanged: ''
  }

  constructor() {
    super();
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // PRIVATE

  _getInputContent = () => {
    const { textChanged } = this.state;

    const {
      dataId,
      divContent,
      theme,
      onUpdate,
      ...props
    } = this.props;

    let textContent = divContent === '' ? 'no content' : divContent;

    if (!!textChanged && !!textChanged.length) {
      textContent = textChanged;
    }

    return(
      <Input
        autoFocus
        basic
        placeholder={ textContent }
        onBlur={ this._handleSave }
        onKeyPress={ this._handleKeyPress }
        onUserInput={ this._handleInput }
        { ...props }
      />
    );
  }

  _getTextContent = () => {
    const { textChanged } = this.state;
    const { divContent, readOnly, type } = this.props;
    const divClass = classnames('EditableDiv-text', { readOnly })
    let textContent = divContent;

    if (type === 'text') {
      textContent = !divContent || divContent === '' ? 'no content' : divContent;
    }

    if (!!textChanged && !!textChanged.length) {
      textContent = textChanged;
    }

    return(
      <p
        className={ divClass }
        onClick={ this._showEditing }
      >
        { textContent }
      </p>
    );
  }

  _handleInput = (textChanged) => {
    this.setState({ textChanged });
  }

  _handleKeyPress = (e) => {
    const key = e.keyCode || e.which;

    if (key === 13) {
      return this._handleSave();
    }
  }

  _handleNumSave = () => {
    const { textChanged } = this.state;
    const validNumber = Number(textChanged) >= 0;

    if (validNumber && !!textChanged.length) {
      return this._onUpdate();
    }

    this._onReset();
  }

  _handleSave = () => {
    const { type } = this.props;

    if (type === 'number') {
      return this._handleNumSave();
    }

    return this._handleTextSave();
  }

  _handleTextSave = () => {
    const { textChanged } = this.state;
    const { divContent } = this.props;

    if (textChanged !== divContent && !!textChanged.length) {
      return this._onUpdate();
    }

    this._onReset();
  }

  _hideEditing = () => {
    this.setState({ isEditing: false });
  }

  _hideShowSaved = () => {
    if (this._isMounted) {
      this.setState({ showSaved: false });
    }
  }

  _onReset = () => {
    const { divContent } = this.props;

    return this.setState({
      isEditing: false,
      textChanged: divContent
    });
  }

  _onUpdate = () => {
    const { textChanged } = this.state;
    const { dataId, name, onUpdate } = this.props;

    return this.setState({
      isEditing: false,
      showSaved: true
    }, () => {
      return onUpdate(dataId, name, textChanged);
    });
  }

  _showEditing = () => {
    const { showSaved } = this.state;
    const { readOnly } = this.props;

    if (showSaved || readOnly) {
      return;
    }

    this.setState({ isEditing: true });
  }

  _showSaved = () => {
    const { showSaved } = this.state;
    const { theme } = this.props;
    let animationSize = null;

    switch (theme) {
      case 'title':
        animationSize = 30;
        break;
      case 'accent':
        animationSize = 20;
        break;
      default:
        animationSize = 24;
    }

    if (showSaved) {
      return (
        <SuccessAnimation
          animationSize={ animationSize }
          handleHide={ this._hideShowSaved }
        />
      );
    }

    return null;
  }


  render() {
    const { divContent, theme } = this.props;
    const { isEditing, showSaved } = this.state;

    const saved = this._showSaved();
    const MainClass = classnames('EditableDiv', theme, { isEditing, showSaved });
    let mainContent = this._getTextContent();


    if (!!!divContent && divContent !== '') {
      return <DotLoader />;
    }

    if (isEditing) {
      mainContent = this._getInputContent();
    }


    return (
      <div className={ MainClass }>
        { mainContent }

        { saved }
      </div>
    );
  }
}
