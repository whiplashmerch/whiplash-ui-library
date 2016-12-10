import React, { PropTypes } from 'react';
import './Info.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Info({ iconColor }) {
  return(
    <svg className="Info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>info</title><path className="Info-path" fill={ iconColor } d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 17.1A8.1 8.1 0 1 1 17.1 9 8.1 8.1 0 0 1 9 17.1z" /><path className="Info-path" fill={ iconColor } d="M7 5.65a3.8 3.8 0 0 1 .42-.33A3.09 3.09 0 0 1 7.89 5a3 3 0 0 1 .58-.19 3.19 3.19 0 0 1 .68-.07 2.81 2.81 0 0 1 .9.14 2.08 2.08 0 0 1 .71.4 1.84 1.84 0 0 1 .46.62 1.92 1.92 0 0 1 .17.81 2.1 2.1 0 0 1-.13.79 2.2 2.2 0 0 1-.34.58 2.64 2.64 0 0 1-.45.43L10 8.9a3.13 3.13 0 0 0-.37.32.65.65 0 0 0-.18.36l-.11.91h-.8l-.08-1A.74.74 0 0 1 8.57 9a1.7 1.7 0 0 1 .33-.38 4.6 4.6 0 0 1 .45-.34 3.34 3.34 0 0 0 .46-.37 2 2 0 0 0 .35-.47 1.27 1.27 0 0 0 .14-.62A1 1 0 0 0 9.94 6a1.18 1.18 0 0 0-.4-.22 1.55 1.55 0 0 0-.49-.08 1.9 1.9 0 0 0-.61.09A2.42 2.42 0 0 0 8 6l-.29.19a.34.34 0 0 1-.19.09.26.26 0 0 1-.25-.15z" /><circle className="Info-path" fill={ iconColor } cx="8.93" cy="12.79" r=".8" /></svg>
  );
}


Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
