import React, { PropTypes } from 'react';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Clock({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock</title><g fill="none" fillRule="evenodd" stroke="#0ED9AC" transform="translate(1 1)"><circle cx="11" cy="11" r="11"/><path d="M11 11V4m0 15v-1m0-7h5M3 11h1" strokeLinecap="round"/></g></svg>
  );
}


Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;
