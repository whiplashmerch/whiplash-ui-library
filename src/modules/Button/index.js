import React, { Component, PropTypes } from 'react';
import '../../fonts/index.css';
import './Button.css';


const propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  callback: PropTypes.func,
  theme: PropTypes.string
};

const defaultProps = {
  buttonText: 'add buttonText prop',
  buttonType: 'button',
  callback: () => console.warn('no callback prop given'),
  theme: ''
};

const triggerCallback = (e, callback) => {
  callback(e);
};


export default function Button({ buttonText, buttonType, theme, callback }) {
  return(
    <button
      type={ buttonType }
      className={ `Button ${ theme }` }
      onClick={(e) => triggerCallback(e, callback)}
    >
      { buttonText }
    </button>
  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
