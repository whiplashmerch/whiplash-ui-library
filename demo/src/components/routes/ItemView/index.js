import React, { Component } from 'react';
import { Button, Modal, Navicon, Table } from 'src';
import * as DemoComponents from './components';
import AppExample from 'demo/Example';

import geoLogo from '../images/whiplash-geo-logo-white.svg';

import './ItemView.css';


export default class ItemView extends Component {
  state = {
    dropdownActive: false,
    modalActive: false,
    modalContent: null,
    uiComponent: null
  }

  componentDidMount() {
    const { filterItemIfNeeded, params } = this.props;
    filterItemIfNeeded(params.name);
  }

  componentWillReceiveProps(nextProps) {
    const { filterItemIfNeeded, library } = this.props;

    if (library.selected.name !== nextProps.params.name) {
      filterItemIfNeeded(nextProps.params.name);
    }
  }

  // PRIVATE

  _toCapitalize = (str) => {
    let capsString = null;

    return str.replace(/\w\S*/g, function(txt) {
      capsString = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      return capsString.replace(/\s+/g, '');
    });
  }

  _clickButton = (e) => {
    console.log(e);
  }

  _getComponent = () => {
    const { dropdownActive } = this.state;
    const { library }   = this.props;
    const selectedName  = library.selected.name;
    const DemoComponent = DemoComponents[`Demo${ selectedName }`];
    const date = new Date();

    switch (selectedName) {
      case 'Breadcrumb':
        return <DemoComponent active={ selectedName } />;
      case 'Button':
        return <DemoComponent onCallback={ this._clickButton } />;
      case 'CheckButton':
        return <DemoComponent defaultChecked />;
      case 'DatePicker':
        return <DemoComponent onCallback={ this._selectDate } />;
      case 'Dropdown':
        return <DemoComponent open={ dropdownActive } onUpdate={ this._toggleDropdown } />;
      case 'EditableDiv':
        return <DemoComponent onCallback={ this._updateText } />;
      case 'Input':
        return <DemoComponent onInputChange={ this._textInput } />;
      case 'Legend':
        return <DemoComponent onCallback={ this._clickButton } />;
      case 'Modal':
        return <Button buttonText="open modal" theme="text" callback={ this._showModal } />;
      case 'Navicon':
        return <Navicon onUserClick={ this._clickButton } />;
      case 'SelectBox':
        return <DemoComponent callback={ this._clickButton } />;
      case 'Toggle':
        return <DemoComponent active onChecked={ this._clickButton } />;
      default:
        return <DemoComponent />;
    }
  }

  _getPropsContent = () => {
    const { library } = this.props;
    const currentItem = library.selected;

    if (!!!currentItem.props || !!!currentItem.props.length) {
      return null;
    }

    return currentItem.props.map((item, index) => (
      <tr key={ `${ new Date() }-${ index }` }>
        <td>{ item.name }</td>
        <td>{ item.type }</td>
        <td>{ item.default }</td>
        <td>{ item.description }</td>
      </tr>
    ));
  }

  _getTableHead = () => {
    const { library } = this.props;
    const currentItem = library.selected;

    if (!!!currentItem.props || !!!currentItem.props.length) {
      return null;
    }

    return(
      <tr>
        <th>
          name
        </th>
        <th>
          type
        </th>
        <th>
          default
        </th>
        <th>
          description
        </th>
      </tr>
    );
  }

  _selectDate = (e, date) => {
    console.log(date);
  }

  _showModal = () => {
    this.setState({
      modalActive: true,
      modalContent: <AppExample />
    });
  }

  _textInput = (val) => {
    console.log(val);
  }

  _toggleModal = (modalActive) => {
    this.setState({ modalActive });
  }

  _toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownActive: !prevState.dropdownActive
    }));
  }

  _updateLegend = (activeIndex) => {
    console.log(`update state to: ${ activeIndex }`);
  }

  _updateText = (...props) => {
    console.log(...props);
  }


  render() {
    const { library } = this.props;
    const { modalActive, modalContent, naviconActive } = this.state;
    const uiComponent = !!library.selected.name ? this._getComponent() : null;
    const currentItem = library.selected;
    const tableHead   = this._getTableHead();
    const propsContent = this._getPropsContent();

    return(
      <div className="ItemView">
        <header className="ItemView-header">
          <h3 className="ItemView-headline">
            { currentItem.name }
          </h3>

          <p className="ItemView-description">
            { currentItem.description }
          </p>
        </header>

        <div className="ItemView-feature">
          { uiComponent }
        </div>

        <div className="ItemView-feature">
          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">Example Usage</h3>
            <div>
              <code className="ItemView-code">
                { currentItem.component }
              </code>
            </div>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">props</h3>
            <Table>
              <thead>
                { tableHead }
              </thead>
              <tbody>
                { propsContent }
              </tbody>
            </Table>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">notes</h3>
            <p className="ItemView-description">
              { currentItem.notes }
            </p>
          </div>
        </div>

        <Modal
          active={ modalActive }
          content={ modalContent }
          logo={ geoLogo }
          onCloseModal={ this._toggleModal }
        />
      </div>
    );
  }
}
