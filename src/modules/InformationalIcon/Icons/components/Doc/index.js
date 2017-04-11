import React from 'react';
import PropTypes from 'prop-types';
import './Doc.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Doc({ iconColor }) {
  return(
    <svg className="Doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22"><defs><mask id="mask" width="18" height="22" x="0" y="0" maskUnits="userSpaceOnUse"><g id="mask-2" transform="translate(1 1)"><rect id="path-1" width="16" height="20" fill="#fff" ry="1"/></g></mask></defs><title>document</title><g id="Main"><g mask="url(#mask)"><g><path id="Fill-9" d="M4 7h10V6H4v1z" className="Doc-path" fill={ iconColor } /><g id="Rectangle"><rect id="path-1-2" width="16" height="20" x="1" y="1" data-name="path-1" fill="none" className="Doc-stroke" stroke={ iconColor } strokeWidth="2px" rx="1" ry="1"/></g><path d="M4 10h10V9H4v1z" className="Doc-path" fill={ iconColor } /><path d="M4 13h10v-1H4v1z" className="Doc-path" fill={ iconColor } /><path className="Doc-path" d="M4 16h10v-1H4v1z" fill={ iconColor } /></g></g></g></svg>
  );
}


Doc.propTypes = propTypes;
Doc.defaultProps = defaultProps;
