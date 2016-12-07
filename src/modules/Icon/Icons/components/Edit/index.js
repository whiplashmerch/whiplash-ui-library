import React, { PropTypes } from 'react';
import 'fonts/index.css';
import './Edit.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Edit({ iconColor }) {
  return(
    <svg className="Edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.21 20.21"><title>edit</title><g id="Main"><g><path className="Edit-path" fill={ iconColor } d="M4.5 20.21H0v-4.5L15.71 0l4.5 4.48zm-3.5-1h3.08L15.68 7.6l-3.07-3.08L1 16.15zM13.31 3.82l3.07 3.07 2.4-2.41-3.07-3.06z" /></g></g></svg>
  );
}


Edit.propTypes = propTypes;
Edit.defaultProps = defaultProps;
