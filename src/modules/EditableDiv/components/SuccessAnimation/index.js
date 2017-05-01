import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InformationalIcon from '../../../InformationalIcon';

import './SuccessAnimation.css'


export default class SuccessAnimation extends Component {
  static propTypes = {
    animationSize: PropTypes.number,
    handleHide: PropTypes.func
  }

  static defaultProps = {
    animationSize: 24,
    handleHide: () => console.log('add handleHide prop')
  }

  componentDidMount() {
    setTimeout(() => {
      this._animateOut();
    }, 4000);
  }

  // PRIVATE

  _animateOut = () => {
    const { handleHide } = this.props;

    if (!!this.icon) {
      this.icon.classList.remove('zoomIn');
      this.icon.classList.add('zoomOut');
    }

    setTimeout(() => {
      return handleHide();
    }, 700);
  }


  render() {
    const { animationSize } = this.props;

    const styles = {
      height: Number(animationSize),
      width: Number(animationSize)
    };


    return (
      <div
        className="SuccessAnimation animated zoomIn"
        style={ styles }
        ref={ el => this.icon = el }
      >
        <InformationalIcon
          name="approved"
          height={ String(animationSize) }
          width={ String(animationSize) }
        />
      </div>
    );
  }
}
