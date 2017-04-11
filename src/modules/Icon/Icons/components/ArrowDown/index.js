import React from 'react';
import PropTypes from 'prop-types';
import './ArrowDown.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function ArrowDown({ iconColor }) {
  return(
    <svg className="ArrowDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.01 4.82"><title>arrow-down</title><path className="ArrowDown-path" fill={ iconColor } d="M4.51 4.82L.15.78A.45.45 0 0 1 .76.12L4.51 3.6 8.26.12a.45.45 0 0 1 .61.66z" /></svg>
  );
}


ArrowDown.propTypes = propTypes;
ArrowDown.defaultProps = defaultProps;
