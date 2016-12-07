import React, { PropTypes } from 'react';
import 'fonts/index.css';
import './List.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function List({ iconColor }) {
  return(
    <svg className="List" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.5 20"><title>list</title><g id="Main"><g><g id="Group-39"><g id="Group-23"><path className="List-path" fill={ iconColor } d="M28 1.5H8a.5.5 0 0 1 0-1h20a.5.5 0 0 1 0 1z" /><path className="List-path" fill={ iconColor } d="M28 10.5H8a.5.5 0 0 1 0-1h20a.5.5 0 0 1 0 1z" /><path className="List-path" fill={ iconColor } d="M28 19.5H8a.5.5 0 0 1 0-1h20a.5.5 0 0 1 0 1z" /></g><path className="List-path" fill={ iconColor } d="M0 0h2v2H0z" /><path className="List-path" fill={ iconColor } d="M0 9h2v2H0z" /><path className="List-path" fill={ iconColor } d="M0 18h2v2H0z" /></g></g></g></svg>
  );
}


List.propTypes = propTypes;
List.defaultProps = defaultProps;
