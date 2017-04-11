import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'src';


export default class DemoInput extends Component {
  static propTypes = {
    onInputChange: PropTypes.func
  }

  state = {
    value: 'Sirius Black'
  }

  // PRIVATE

  _updateState = (value) => {
    const { onInputChange } = this.props;

    this.setState({ value }, () => {
      onInputChange(value);
    });
  }


  render() {
    const { onInputChange, value } = this.state;

    return(
      <div>
        <Input
          inputLabel="name"
          type="text"
          maxLength="220"
          onUserInput={ onInputChange }
          required
        />

        <Input
          inputLabel="name"
          type="text"
          maxLength="220"
          onUserInput={ this._updateState }
          value={ value }
          required
        />

        <div style={{ paddingTop: '1rem' }}>
          <Input
            basic
            inputLabel="email"
            type="email"
            maxLength="220"
            placeholder="email@example.com"
            onUserInput={ onInputChange }
            required
          />
        </div>

        <div style={{ paddingTop: '1rem' }}>
          <Input
            basic
            search
            type="text"
            maxLength="222"
            placeholder="search things..."
            onUserInput={ onInputChange }
          />
        </div>

        <div style={{ paddingTop: '1rem' }}>
          <Input
            basic
            inputLabel="password"
            type="password"
            maxLength="222"
            onUserInput={ onInputChange }
          />
        </div>

        <Input
          inputLabel="password"
          type="password"
          maxLength="220"
          onUserInput={ onInputChange }
          required
        />
      </div>
    );
  }
}
