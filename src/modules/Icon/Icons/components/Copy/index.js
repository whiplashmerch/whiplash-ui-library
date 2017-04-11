import React from 'react';
import PropTypes from 'prop-types';
import './Copy.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Copy({ iconColor }) {
  return(
    <svg className="Copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><title>copy</title><path className="Copy-path" fill="#808091" d="M16 17v3H1V5h3V4H0v17h17v-4z" /><path className="Copy-path" fill={ iconColor } d="M4 0v17h17V0zm16 16H5V1h15z" /></svg>
  );
}


Copy.propTypes = propTypes;
Copy.defaultProps = defaultProps;
