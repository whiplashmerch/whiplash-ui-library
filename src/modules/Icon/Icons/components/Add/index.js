import React, { PropTypes } from 'react';
import './Add.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Add({ iconColor }) {
  return(
    <svg className="Add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.21 25.21"><title>add</title><path className="Add-path" fill={ iconColor } d="M12.6 0a12.6 12.6 0 1 0 12.6 12.6A12.62 12.62 0 0 0 12.6 0zm0 24.06A11.45 11.45 0 1 1 24.05 12.6 11.45 11.45 0 0 1 12.6 24.05z" /><path className="Add-path" fill={ iconColor } d="M17.1 12.6a.5.5 0 0 1-.5.5h-3.5v3.5a.5.5 0 0 1-1 0v-3.5H8.6a.5.5 0 0 1 0-1h3.5V8.6a.5.5 0 0 1 1 0v3.5h3.5a.5.5 0 0 1 .5.5z" /></svg>
  );
}


Add.propTypes = propTypes;
Add.defaultProps = defaultProps;
