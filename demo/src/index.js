import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './Example';

import {
  Button,
  Input,
  Modal,
  Navicon
} from '../../src';


class Demo extends Component {
  constructor(props) {
    super();

    this.state = {
      modalActive: false,
      modalContent: null
    };

    // cache methods
    this._showModal = this._showModal.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
  }

  // PRIVATE

  _showModal() {
    this._toggleModal(true);
  }

  _toggleModal(modalActive) {
    this.setState({
      modalActive,
      modalContent: <Example />
    });
  }


  render() {
    return(
      <div>
        <h3>Will this work?</h3>
        <Button buttonText="primary" theme="danger" callback={ this._clickButton } />
        <Button buttonText="filled" theme="filled" callback={ this._clickButton } />
        <Input inputLabel="email" inputType="email" onUserInput={ null } />

        <div style={{ position: 'relative', height: '50px' }}>
          <Navicon />
        </div>

        <div>
          <Button
            buttonText="Show modal"
            theme="text"
            callback={ this._showModal } />
        </div>

        <Modal
          active={ this.state.modalActive }
          content={ this.state.modalContent }
          onCloseModal={ this._toggleModal } />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
