import React from 'react';
import PropTypes from 'prop-types';
import './Refresh.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Refresh({ iconColor }) {
  return(
    <svg className="Refresh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><title>refresh</title><g id="Main"><g><g><g><path className="Refresh-path" fill={ iconColor } d="M11.5 0a11.49 11.49 0 0 0-4.48.9 11.33 11.33 0 0 0-3.65 2.47 11.5 11.5 0 0 0-.35 15.9L.26 22.03a.49.49 0 0 0-.11.55.5.5 0 0 0 .46.31h6.22a.53.53 0 0 0 .36-.15.5.5 0 0 0 .14-.35v-6.22a.5.5 0 0 0-.31-.47.51.51 0 0 0-.54.11l-2.75 2.75A10.52 10.52 0 0 1 7.58 1.75 10.56 10.56 0 0 1 11.5 1a.5.5 0 0 0 0-1zM6.33 21.89H1.82l2.27-2.27 2.24-2.25z" /><path className="Refresh-path" fill={ iconColor } d="M19.97 3.73L22.74.96a.49.49 0 0 0 .11-.54.5.5 0 0 0-.46-.31h-6.22a.5.5 0 0 0-.5.5v6.22a.48.48 0 0 0 .3.46.48.48 0 0 0 .2 0 .52.52 0 0 0 .33-.1l2.74-2.75a10.47 10.47 0 0 1-.34 14.48A10.4 10.4 0 0 1 11.5 22a.5.5 0 0 0 0 1 11.49 11.49 0 0 0 8.47-19.27zm-3.3-2.62h4.51l-2.27 2.27-2.24 2.25z" /></g></g></g></g></svg>
  );
}


Refresh.propTypes = propTypes;
Refresh.defaultProps = defaultProps;
