import React from 'react';
import PropTypes from 'prop-types';
import './Trash.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Trash({ iconColor }) {
  return(
    <svg className="Trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>trash</title><defs><mask id="a" width="8" height="3" x="0" y="0" fill="#fff"><path d="M5 1c0-.553.453-1 .997-1h6.006c.55 0 .997.443.997 1v1c0 .553-.453 1-.997 1H5.997C5.447 3 5 2.557 5 2V1z"/></mask><mask id="b" width="16" height="18" x="0" y="0" fill="#fff"><path d="M1 2h16l-.948 16.005C15.986 19.107 15.045 20 13.932 20H4.068c-1.105 0-2.054-.893-2.12-1.995L1 2z"/></mask></defs><g className="Trash-path" stroke={ iconColor } fill="none" fillRule="evenodd"><path strokeWidth="2" d="M5 1c0-.553.453-1 .997-1h6.006c.55 0 .997.443.997 1v1c0 .553-.453 1-.997 1H5.997C5.447 3 5 2.557 5 2V1z" mask="url(#a)" transform="translate(1)"/><path strokeWidth="2" d="M1 2h16l-.948 16.005C15.986 19.107 15.045 20 13.932 20H4.068c-1.105 0-2.054-.893-2.12-1.995L1 2z" mask="url(#b)" transform="translate(1)"/><path d="M1 2.5h18M8 8v5m4-5v5" strokeLinecap="round"/></g></svg>
  );
}


Trash.propTypes = propTypes;
Trash.defaultProps = defaultProps;
