import React, { PropTypes } from 'react';
import './Grid.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Grid({ iconColor }) {
  return(
    <svg className="Grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><mask id="mask" width="22" height="22" x="0" y="0" maskUnits="userSpaceOnUse"><g id="mask-2"><path className="Grid-white-path" id="path-1" d="M1 1h8v8H1z" /></g><g id="mask-4"><path className="Grid-white-path" id="path-3" d="M13 1h8v8h-8z" /></g><g id="mask-6"><path className="Grid-white-path" id="path-5" d="M1 13h8v8H1z" /></g><g id="mask-8"><path className="Grid-white-path" id="path-7" d="M13 13h8v8h-8z" /></g></mask></defs><title>grid</title><g id="Main"><g className="Grid-mask"><g id="Group"><g id="Rectangle-5"><path id="path-1-2" d="M1 1h8v8H1z" data-name="path-1" className="Grid-path"/></g><g id="Rectangle-5-2" data-name="Rectangle-5"><path id="path-3-2" d="M13 1h8v8h-8z" data-name="path-3" className="Grid-path"/></g><g id="Rectangle-5-3" data-name="Rectangle-5"><path id="path-5-2" d="M1 13h8v8H1z" data-name="path-5" className="Grid-path"/></g><g id="Rectangle-5-4" data-name="Rectangle-5"><path id="path-7-2" d="M13 13h8v8h-8z" data-name="path-7" className="Grid-path" /></g></g></g></g></svg>
  );
}


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
