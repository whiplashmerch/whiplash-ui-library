import React from 'react';
import PropTypes from 'prop-types';
import './Clipboard.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Clipboard({ iconColor }) {
  return(
    <svg className="Clipboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><title>clipboard</title><g fill="none" fillRule="evenodd" transform="translate(1)"><path className="Clipboard-path" stroke={ iconColor } d="M18.342 2C20.362 2 22 3.636 22 5.658v14.684C22 22.362 20.364 24 18.342 24H3.658C1.638 24 0 22.364 0 20.342V5.658C0 3.638 1.636 2 3.658 2"/><path className="Clipboard-path" fill="none" stroke={ iconColor } d="M0 11h22" /><path className="Clipboard-path" stroke={ iconColor } d="M8 2h6" strokeLinecap="round"/><rect className="Clipboard-fill" width="1" height="5" x="5" fill={ iconColor } rx=".5"/><circle className="Clipboard-path" cx="5.5" cy="6.5" r="1.5" stroke={ iconColor } /><rect className="Clipboard-fill" width="1" height="5" x="16" fill={ iconColor } rx=".5"/><circle className="Clipboard-path" cx="16.5" cy="6.5" r="1.5" stroke={ iconColor } /></g></svg>
  );
}


Clipboard.propTypes = propTypes;
Clipboard.defaultProps = defaultProps;
