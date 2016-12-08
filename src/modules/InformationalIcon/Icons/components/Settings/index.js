import React, { PropTypes } from 'react';
import './Settings.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Settings({ iconColor }) {
  return(
    <svg className="Settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>settings</title><g fill="none" fillRule="evenodd" strokeWidth="1.3" transform="translate(1 1)"><path className="Settings-stroke" stroke={ iconColor }  d="M0 2h15m4 0h7" strokeLinecap="round"/><ellipse cx="17" cy="2" className="Settings-stroke" stroke={ iconColor }  rx="2" ry="2"/><path className="Settings-stroke" stroke={ iconColor } d="M0 24h15m4 0h7" strokeLinecap="round"/><ellipse cx="17" cy="24" className="Settings-stroke" stroke={ iconColor } rx="2" ry="2"/><path className="Settings-stroke" stroke={ iconColor }  d="M0 13h9m4 0h13" strokeLinecap="round"/><circle cx="11" cy="13" r="2" className="Settings-stroke" stroke={ iconColor } /></g></svg>
  );
}


Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;
