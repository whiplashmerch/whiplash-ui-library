import React from 'react';
import PropTypes from 'prop-types';
import './Alarm.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Alarm({ iconColor }) {
  return(
    <svg className="Alarm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.04 25.1"><title>alarm-empty</title><path className="Alarm-path" fill={ iconColor } d="M20.7 19.7a6.77 6.77 0 0 1-2.5-5v-4.2a7.83 7.83 0 0 0-5.6-7.4v-1A2.18 2.18 0 0 0 10.5 0a2.18 2.18 0 0 0-2.1 2.1v1a7.83 7.83 0 0 0-5.6 7.4v4.2a6.45 6.45 0 0 1-2.5 5c-.3.1-.3.6-.3.8a.67.67 0 0 0 .7.4H7v.7a3.42 3.42 0 0 0 3.5 3.5 3.42 3.42 0 0 0 3.5-3.5 1.7 1.7 0 0 0-.1-.7h6.4a.67.67 0 0 0 .7-.4.63.63 0 0 0-.3-.8zM9.8 2a.7.7 0 1 1 1.4 0v.7H9.8zm2.8 19.6a2.18 2.18 0 0 1-2.1 2.1 2.18 2.18 0 0 1-2.1-2.1 1.7 1.7 0 0 1 .1-.7h3.9a1 1 0 0 1 .2.7zM2.3 19.5a5 5 0 0 0 1-1.4 6.94 6.94 0 0 0 .8-3.5v-4.2a6.3 6.3 0 0 1 12.6 0v4.2a8.17 8.17 0 0 0 .8 3.5 5 5 0 0 0 1 1.4z" /></svg>
  );
}


Alarm.propTypes = propTypes;
Alarm.defaultProps = defaultProps;
