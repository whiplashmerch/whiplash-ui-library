import React, { Component } from 'react';
import FetchHelper from '../../classes/FetchHelper';
import AppExample from '../../Example';
import LibraryData from '../../library.json';
import geoLogo from '../images/whiplash-geo-logo-white.svg';
import './ItemView.css';

import {
  Breadcrumb,
  Button,
  CheckButton,
  Icon,
  Input,
  Legend,
  Modal,
  Navicon
} from '../../../../src';



export default class ItemView extends Component {
  constructor() {
    super();
    this.icons = [
      'add', 'alarm', 'alarm_filled', 'arrow_down_circle', 'arrow_down',
      'arrow_right', 'close', 'copy', 'edit', 'export', 'grid', 'info', 'list'
    ];

    this.state = {
      activeIndex: '2',
      items: LibraryData,
      item: {},
      modalActive: false,
      modalContent: null,
      naviconActive: false,
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
    this._updateLegend = this._updateLegend.bind(this);
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
      { name: name, url: `/library/${ name }` }
    ];


    switch (name) {
      case 'breadcrumb':
        return <Breadcrumb list={ list } router />;
      case 'button':
        return(
          <div>
            <Button
              buttonText="default"
              callback={ this._clickButton }
            />

            <Button
              buttonText="secondary-border"
              theme="secondary-border"
              callback={ this._clickButton }
            />

            <Button
              buttonText="text link"
              theme="text"
              callback={ this._clickButton }
            />
          </div>
        );
      case 'checkbutton':
        return <CheckButton onUserSelect={ this._clickButton } />;
      case 'input':
        return(
          <Input
            inputLabel="name"
            type="text"
            maxLength="220"
            onUserInput={ this._textInput }
            required
          />
        );
      case 'icons':
        const date = new Date();
        return(
          <div className="Icon-wrapper">
            {
              this.icons.map((ico, index) => (
                <div className="Icon-container" key={ `${ date }-${ index }` }>
                  <Icon name={ ico }>{ ico }</Icon>
                </div>
              ))
            }
          </div>
        );
      case 'legend':
        return <Legend total="4" activeIndex={ this.state.activeIndex } callback={ this._updateLegend } />;
      case 'modal':
        return <Button buttonText="open modal" theme="text" callback={ this._showModal } />;
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


  _toggleModal(modalActive) {
    this.setState({ modalActive });
  }


  _toggleNavicon(naviconActive) {
    console.log(`Navicon state: ${ naviconActive }`);
    this.setState({ naviconActive });
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

  _updateLegend(activeIndex) {
    console.log(`update state to: ${ activeIndex }`);
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
          { this.state.uiComponent || <Navicon active={ this.state.naviconActive } onUserInput={ this._toggleNavicon } /> }
        </div>

        <div className="ItemView-feature">
          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">Example Usage</h3>
            <div>
              <code className="ItemView-code">
                { this.state.item.component }
              </code>
            </div>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">instructions</h3>
            <p className="ItemView-description">
              { this.state.item.instructions }
            </p>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">notes</h3>
            <p className="ItemView-description">
              { this.state.item.notes }
            </p>
          </div>
        </div>

        <Modal
          active={ this.state.modalActive }
          content={ this.state.modalContent }
          logo={ geoLogo }
          onCloseModal={ this._toggleModal } />
      </div>
    );
  }

}
