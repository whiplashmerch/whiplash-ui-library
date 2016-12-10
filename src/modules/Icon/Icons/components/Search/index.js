import React, { PropTypes } from 'react';
import './Search.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Search({ iconColor }) {
  return(
    <svg className="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 22.5"><title>search</title><path className="Search-path" fill={ iconColor } d="M21.94 19.28l-6.29-6.19A8.38 8.38 0 0 0 17 8.5 8.5 8.5 0 1 0 8.5 17a8.38 8.38 0 0 0 4.43-1.25l6.3 6.2a1.9 1.9 0 0 0 1.35.55 1.94 1.94 0 0 0 1.36-.55 1.87 1.87 0 0 0 0-2.67zM1 8.5A7.5 7.5 0 1 1 8.5 16 7.5 7.5 0 0 1 1 8.5zm20.24 12.74a1 1 0 0 1-.66.26.91.91 0 0 1-.65-.26l-5.92-5.84a9 9 0 0 0 1.21-1.33l6 5.92a.85.85 0 0 1 .27.63.87.87 0 0 1-.25.62z" /></svg>
  );
}


Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
