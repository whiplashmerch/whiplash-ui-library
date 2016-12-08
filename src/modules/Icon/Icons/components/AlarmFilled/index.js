import React, { PropTypes } from 'react';
import './AlarmFilled.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function AlarmFilled({ iconColor }) {
  return(
    <svg className="AlarmFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 18"><title>alarm-filled</title><path className="AlarmFilled-path" fill={ iconColor } d="M14.8 14.1a4.7 4.7 0 0 1-1.8-3.6v-3a5.58 5.58 0 0 0-4-5.3v-.7a1.5 1.5 0 1 0-3 0v.7a5.58 5.58 0 0 0-4 5.3v3a4.7 4.7 0 0 1-1.8 3.6c-.2.1-.2.4-.2.6a.55.55 0 0 0 .5.3H5v.5a2.5 2.5 0 0 0 5 0 .9.9 0 0 0-.1-.5h4.6a.55.55 0 0 0 .5-.3.48.48 0 0 0-.2-.6zM7 1.5a.5.5 0 0 1 1 0V2H7z" /></svg>
  );
}


AlarmFilled.propTypes = propTypes;
AlarmFilled.defaultProps = defaultProps;
