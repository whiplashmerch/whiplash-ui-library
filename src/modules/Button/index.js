import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import '../../fonts/index.css';
import './Button.css';


const propTypes = {
  buttonText: PropTypes.string,
  callback: PropTypes.func,
  theme: PropTypes.string
};

const defaultProps = {
  buttonText: 'do it',
  theme: ''
};

const triggerCallback = (e, cb) => {
  if (!!cb) {
    cb(e);
  } else {
    return;
  }
};


export default function Button({ buttonText, theme, callback, ...props }) {
  const MainClass = classnames('Button', theme);

  return(
    <button
      className={ MainClass }
      onClick={e => triggerCallback(e, callback)}
      { ...props }
    >
      { buttonText }
    </button>
  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
