import React, { PropTypes } from 'react';
import './ArrowRight.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function ArrowRight({ iconColor }) {
  return(
    <svg className="ArrowRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><title>arrow-right</title><path className="ArrowRight-path" fill={ iconColor } d="M10.5 0A10.5 10.5 0 1 0 21 10.5 10.5 10.5 0 0 0 10.5 0zm0 20A9.56 9.56 0 0 1 1 10.5 9.56 9.56 0 0 1 10.5 1a9.56 9.56 0 0 1 9.5 9.5 9.56 9.56 0 0 1-9.5 9.5z" /><path className="ArrowRight-path" fill={ iconColor } d="M16.2 10.5a.4.4 0 0 1-.2.4l-3.2 2.9a.37.37 0 0 1-.3.1.4.4 0 0 1-.4-.2.48.48 0 0 1 0-.7l2.4-2.1h-9a.47.47 0 0 1-.5-.5c0-.3.2-.4.5-.4h8.9l-2.3-2.1a.495.495 0 0 1 .7-.7l3.2 2.9a.4.4 0 0 1 .2.4z" /></svg>
  );
}


ArrowRight.propTypes = propTypes;
ArrowRight.defaultProps = defaultProps;
