import React, { PropTypes } from 'react';
import './Export.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Export({ iconColor }) {
  return(
    <svg className="Export" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26"><title>export</title><g id="Main"><g><g><path className="Export-path" fill={ iconColor } d="M1.83 26A2.09 2.09 0 0 1 0 24V8.54A1.64 1.64 0 0 1 1.83 7h4a.5.5 0 0 1 0 1h-4c-.37 0-.83.13-.83.54V24c0 .45.43 1 .83 1h21.65c.34 0 .52-.51.52-1V8.54c0-.35 0-.54-.52-.54h-4.26a.5.5 0 0 1 0-1h4.26A1.41 1.41 0 0 1 25 8.54V24c0 1-.58 2-1.52 2z" /><path className="Export-path" fill={ iconColor } d="M16.6 4.6a.61.61 0 0 1-.81-.1L13 1.71v12.81a.5.5 0 0 1-1 0V1.66L9.16 4.5a.61.61 0 0 1-.81.1.6.6 0 0 1 .1-.81L11.79.45c.08-.08.51-.45.71-.45s.6.39.66.45l3.34 3.34a.61.61 0 0 1 .1.81z" /><path className="Export-path" fill={ iconColor } d="M16.56 20H8.44a.5.5 0 0 1 0-1h8.13a.5.5 0 0 1 0 1z" /></g></g></g></svg>
  );
}


Export.propTypes = propTypes;
Export.defaultProps = defaultProps;
