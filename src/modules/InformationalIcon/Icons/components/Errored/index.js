import React, { PropTypes } from 'react';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Errored({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>errored</title><defs><mask id="a" width="22" height="22" x="0" y="0" fill="#fff"><circle cx="11" cy="11" r="11"/></mask></defs><g fill="none" fillRule="evenodd"><g fill="#FF007F" transform="translate(6 7)"><rect width="10" height=".889" x="-.072" y="3.455" transform="rotate(-45 4.928 3.955)" rx=".444"/><rect width="10" height=".889" x="-.15" y="3.455" transform="rotate(45 4.85 3.955)" rx=".444"/></g><circle cx="11" cy="11" r="11" stroke="#FF007F" strokeWidth="2" mask="url(#a)"/></g></svg>
  );
}


Errored.propTypes = propTypes;
Errored.defaultProps = defaultProps;
