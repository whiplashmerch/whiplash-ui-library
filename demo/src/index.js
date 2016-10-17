import React, { Component } from 'react';
import { render } from 'react-dom';

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
      modalContent: ''
    };
  }

  render() {
    return(
      <div>
        <h3>Will this work?</h3>
        <Button buttonText="default" callback={ this._clickButton } />
        <Input inputLabel="email" inputType="email" onUserInput={ null } />

        <div style={{ position: 'relative' }}>
          <Navicon />
        </div>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
