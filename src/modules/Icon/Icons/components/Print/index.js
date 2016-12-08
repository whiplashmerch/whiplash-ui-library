import React, { PropTypes } from 'react';
import 'fonts/index.css';
import './Print.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Print({ iconColor }) {
  return(
    <svg className="Print" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26"><title>print</title><defs><mask id="a" width="28" height="16" x="0" y="0" fill="#fff"><rect width="28" height="16" y="7" rx="2"/></mask><mask id="b" width="16" height="8" x="0" y="0" fill="#fff"><rect width="16" height="8" x="6" y="18" rx="1"/></mask><mask id="c" width="16" height="8" x="0" y="0" fill="#fff"><rect width="16" height="8" x="6" rx="1"/></mask></defs><g className="Print-path" stroke={ iconColor } fill="none" fillRule="evenodd"><rect width="28" height="16" y="7" fill="#FFF" strokeWidth="2" rx="2" mask="url(#a)"/><path d="M21 13h2M5 18.5h18" strokeLinecap="round" /><rect width="16" height="8" x="6" y="18" fill="#FFF" strokeWidth="2" rx="1" mask="url(#b)" /><rect width="16" height="8" x="6" fill="#FFF" strokeWidth="2" rx="1" mask="url(#c)" /></g></svg>
  );
}


Print.propTypes = propTypes;
Print.defaultProps = defaultProps;
