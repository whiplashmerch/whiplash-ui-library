import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DotLoader from '../DotLoader';

import '../../fonts/index.css';
import './Button.css';


const propTypes = {
  buttonText: PropTypes.string,
  callback: PropTypes.func,
  loading: PropTypes.bool,
  theme: PropTypes.string
};

const defaultProps = {
  buttonText: 'do it',
  loading: false,
  theme: ''
};

const triggerCallback = (e, cb) => {
  if (!!cb) {
    cb(e);
  } else {
    return;
  }
};


export default function Button({ buttonText, callback, loading, theme, ...props }) {
  const MainClass = classnames('Button', theme, { loading });
  let content = buttonText;


  if (loading) {
    content = <DotLoader />;
  }

  return(
    <button
      className={ MainClass }
      onClick={e => triggerCallback(e, callback)}
      { ...props }
    >
      { content }
    </button>
  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
