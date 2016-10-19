import 'whatwg-fetch';
import React, { Component } from 'react';
import FetchHelper from '../../classes/FetchHelper';
import './ItemView.css';
import AppExample from '../../modules/example';
import LibraryData from '../../library.json';

import {
  Breadcrumb,
  Button,
  Input,
  Modal,
  Navicon
} from '../../../../src';



export default class ItemView extends Component {
  constructor() {
    super();

    this.state = {
      items: LibraryData,
      item: {},
      modalActive: false,
      modalContent: null,
      uiComponent: null
    };

    // cache methods
    this._getItem = this._getItem.bind(this);
    this._getComponent = this._getComponent.bind(this);
    this._toggleNavicon = this._toggleNavicon.bind(this);
    this._clickButton = this._clickButton.bind(this);
    this._showModal = this._showModal.bind(this);
    this._textInput = this._textInput.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
  }


  componentDidMount() {
    this._getItem(this.props.params.name);
  }


  componentWillReceiveProps(nextProps) {
    this._getItem(nextProps.params.name);
  }


  // PRIVATE

  _clickButton(e) {
    console.log(e);
  }


  _getComponent(name) {
    const list = [
      { name: 'home', url: '/' },
      { name: this.props.params.name, url: `/${ this.props.params.name }` }
    ];


    switch (name) {
      case 'button':
        return <Button buttonText="default" callback={ this._clickButton } />;
      case 'input':
        return <Input inputLabel="name" onUserInput={ this._textInput } />;
      case 'navicon':
        return <Navicon onUserInput={ this._toggleNavicon } />;
      case 'modal':
        return <Button buttonText="open modal" theme="text" callback={ this._showModal } />;
      case 'breadcrumb':
        return <Breadcrumb list={ list } />;
      default:
        return null;
    }
  }


  _showModal() {
    this.setState({
      modalActive: true,
      modalContent: <AppExample />
    });
  }


  _textInput(val) {
    console.log(val);
  }


  _toggleModal(bool) {
    this.setState({ modalActive: bool });
  }


  _toggleNavicon(bool) {
    console.log(`Navicon state: ${ bool }`);
  }


  _getItem(selectedName) {
    const obj = this.state.items.find(item => (
      item.name === selectedName
    ));

    const newComp = this._getComponent(obj.name);

    this.setState({
      item: obj,
      uiComponent: newComp
    });
  }


  render() {
    return(
      <div className="ItemView">
        <header className="ItemView-header">
          <h3 className="ItemView-headline">{ this.state.item.name }</h3>
          <p className="ItemView-description">
            { this.state.item.description }
          </p>
        </header>

        <div className="ItemView-feature">
          { this.state.uiComponent }
        </div>

        <div className="ItemView-feature">
          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">Example Usage</h3>
            <div>
              <code className="ItemView-code">{ this.state.item.component }</code>
            </div>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">instructions</h3>
            <p className="ItemView-description">{ this.state.item.instructions }</p>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">notes</h3>
            <p className="ItemView-description">{ this.state.item.notes }</p>
          </div>
        </div>

        <Modal
          active={ this.state.modalActive }
          content={ this.state.modalContent }
          onCloseModal={ this._toggleModal } />
      </div>
    );
  }

}
