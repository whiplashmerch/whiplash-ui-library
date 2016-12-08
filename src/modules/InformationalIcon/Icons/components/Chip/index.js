import React, { PropTypes } from 'react';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Chip({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 27"><title>chip</title><defs><linearGradient id="a" x1="68.959%" x2="39.648%" y1="0%" y2="100%"><stop stopColor="#FFECC8" offset="0%"/><stop stopColor="#D1B978" offset="100%"/></linearGradient><mask id="b" width="12" height="1" x="0" y="0" fill="#fff"><path d="M23 7h12v1H23z"/></mask><mask id="c" width="1" height="4" x="0" y="0" fill="#fff"><path d="M17 0h1v4h-1z"/></mask><mask id="d" width="1" height="4" x="0" y="0" fill="#fff"><path d="M17 21h1v4h-1z"/></mask><mask id="e" width="12" height="1" x="0" y="0" fill="#fff"><path d="M23 12h12v1H23z"/></mask><mask id="f" width="12" height="1" x="0" y="0" fill="#fff"><path d="M23 17h12v1H23z"/></mask><mask id="g" width="13" height="17" x="0" y="0" fill="#fff"><rect width="13" height="17" x="11" y="4" rx="2"/></mask><mask id="h" width="12" height="1" x="0" y="0" fill="#fff"><path d="M0 7h12v1H0z"/></mask><mask id="i" width="12" height="1" x="0" y="0" fill="#fff"><path d="M0 12h12v1H0z"/></mask><mask id="j" width="12" height="1" x="0" y="0" fill="#fff"><path d="M0 17h12v1H0z"/></mask></defs><g fill="none" fillRule="evenodd" transform="translate(1 1)"><rect width="35" height="25" fill="url(#a)" rx="4.5"/><rect width="35" height="25" fill="#FCFCFC" stroke="#E1E1EA" rx="4.5"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M23 7h12v1H23z" mask="url(#b)"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M17 0h1v4h-1z" mask="url(#c)"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M17 21h1v4h-1z" mask="url(#d)"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M23 12h12v1H23z" mask="url(#e)"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M23 17h12v1H23z" mask="url(#f)"/><rect width="13" height="17" x="11" y="4" fill="#FDFDFD" stroke="#E1E1EA" strokeWidth="2" mask="url(#g)" rx="2"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M0 7h12v1H0z" mask="url(#h)"/><path fill="#E5E5E5" stroke="#E1E1EA" strokeWidth="2" d="M0 12h12v1H0z" mask="url(#i)"/><path fill="#E5E5E5" stroke="#E1E1EA" d="M0 17h11v1H"></path></g></svg>
  );
}


Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;
