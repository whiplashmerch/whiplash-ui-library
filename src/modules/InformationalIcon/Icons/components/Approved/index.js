import React, { PropTypes } from 'react';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Approved({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22"><title>approved</title><g fill="none" fillRule="evenodd" stroke="#0ED9AC" strokeLinecap="round"><path d="M22 2c-2.903 2.91-7.734 8.03-10.687 11L7 9.35"/><path d="M16.896 2.92c-1.798-1.31-3.964-1.972-6.15-1.917-.728.02-1.46.115-2.18.296C3.214 2.64-.04 8.08 1.304 13.434c1.343 5.353 6.775 8.605 12.13 7.262 5.354-1.343 8.608-6.774 7.264-12.127"/></g></svg>
  );
}


Approved.propTypes = propTypes;
Approved.defaultProps = defaultProps;
