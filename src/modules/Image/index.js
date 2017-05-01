import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import 'animate.css';
import './Image.css';


export default class Image extends Component {
  // PRIVATE

  _loadImage = () => {
    if (!!this.img) {
      this.img.classList.add('fadeIn');
    }
  }


  render() {
    const { src, ...props } = this.props;


    if (!!!src) {
      return null;
    }

    return(
      <img
        { ...props }
        className="Image animated"
        onLoad={ this._loadImage }
        ref={ el => el = this.img = el }
        src={ src }
      />
    );
  }
}
