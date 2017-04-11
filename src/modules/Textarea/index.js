import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../fonts/index.css';
import './Textarea.css';


export default class Textarea extends Component {
  static propTypes = {
    inputLabel: PropTypes.string
  }

  static defaultProps = {
    inputLabel: null
  }


  render() {
    const { inputLabel, ...props } = this.props;

    return(
      <label className="Textarea">
        { inputLabel || null }

        <textarea
          className="Textarea-input"
          { ...props }
        />
      </label>
    );
  }
}
