import React, { Component } from 'react';
import { CheckButton } from 'src';


export default class DemoCheckButton extends Component {
  state = {
    checked: true
  }


  render() {
    const { checked } = this.state;

    return(
      <div>
        <CheckButton
          checked={ checked }
          name="test"
          onClick={() => {
            this.setState(prevState => ({
              checked: !prevState.checked
            }));
          }}
        />

        <CheckButton defaultChecked name="test" />
        <CheckButton name="test" />
      </div>
    );
  }
}
