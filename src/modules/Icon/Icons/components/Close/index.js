import React from 'react';
import PropTypes from 'prop-types';
import './Close.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Close({ iconColor }) {
  return(
    <svg className="Close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.62 14.62"><title>close</title><g id="Main"><g id="Whiplash-Orders-Interactive-UI-Copy"><g id="Group-12"><path className="Close-path" fill={ iconColor } d="M14.48 13.73a.5.5 0 0 1-.35.85.51.51 0 0 1-.36-.15L7.32 8.02.86 14.47a.51.51 0 0 1-.36.15.5.5 0 0 1-.35-.15.48.48 0 0 1 0-.7l6.44-6.46L.15.85a.5.5 0 0 1 0-.71.51.51 0 0 1 .71 0L7.32 6.6 13.77.14a.51.51 0 0 1 .71 0 .51.51 0 0 1 0 .71L8.02 7.31z" /></g></g></g></svg>
  );
}


Close.propTypes = propTypes;
Close.defaultProps = defaultProps;
