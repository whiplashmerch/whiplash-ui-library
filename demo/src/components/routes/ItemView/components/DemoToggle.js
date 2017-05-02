import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'src';


export default class DemoToggle extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onChecked: PropTypes.func
  }

  state = {
    error: false,
    stateActive: false
  }

  // PRIVATE

  _changeBack = (stateActive) => {
    this.setState({ stateActive }, () => {
      this._showChange();
    })
  }

  _showChange = () => {
    const { stateActive } = this.state;
    const { onChecked } = this.props;

    if (!stateActive) {
      return;
    }

    setTimeout(() => {
      this.setState(prevState => ({
        error: true,
        stateActive: !prevState.stateActive
      }), () => {
        setTimeout(() => {
          this.setState(prevState => ({
            error: !prevState.error
          }));
        }, 4000);
      });
    }, 800);
  }

  _toggleError = () => {
    return setTimeout(() => {
      this.setState(prevState => ({
        error: !prevState.error
      }));
    }, 800);
  }


  render() {
    const { error, stateActive } = this.state;
    const { active, onChecked  } = this.props;

    const textStyle = {
      color: '#CC3E4A',
      display: error ? 'block' : 'none',
      fontSize: '0.8rem',
      letterSpacing: '0.03rem',
      paddingTop: '1rem'
    };


    return(
      <div>
        <Toggle active callback={ onChecked } />
        <Toggle readOnly active />

        <Toggle
          active={ stateActive }
          ref={ el => this.testToggle = el }
          callback={ this._changeBack }
        />

        <p style={ textStyle }>
          Oh, no! Here is an example error message.
        </p>
      </div>
    );
  }
}
