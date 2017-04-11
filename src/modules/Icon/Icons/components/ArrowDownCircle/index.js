import React from 'react';
import PropTypes from 'prop-types';
import './ArrowDownCircle.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function ArrowDownCircle({ iconColor }) {
  return(
    <svg className="ArrowDownCircle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 19.4"><title>arrow-down-circle</title><path className="ArrowDownCircle-path" fill={ iconColor } d="M9.7 19.4a9.7 9.7 0 1 1 9.7-9.7 9.71 9.71 0 0 1-9.7 9.7zm0-18.3a8.6 8.6 0 1 0 8.6 8.6 8.6 8.6 0 0 0-8.6-8.6z" /><path className="ArrowDownCircle-path" fill={ iconColor } d="M9.56 11.88L6.43 9.17a.5.5 0 1 1 .65-.76l2.47 2.14 2.4-2.13a.5.5 0 0 1 .66.75z" /></svg>
  );
}


ArrowDownCircle.propTypes = propTypes;
ArrowDownCircle.defaultProps = defaultProps;
