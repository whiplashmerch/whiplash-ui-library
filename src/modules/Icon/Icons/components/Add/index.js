import React, { PropTypes } from 'react';
import './Add.css';

const propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

const defaultProps = {
  color: '#646471',
  height: '26',
  width: '26'
};


export default function Add({ height, width, color }) {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="Add"
      height={ height }
      width={ width }
      viewBox={ `0 0 ${ width } ${ height }` }
    >
      <title>add icon</title>

      <path
        className="Add-path"
        d="M13 0a13 13 0 1 0 13 13A13 13 0 0 0 13 0zm0 24.58A11.58 11.58 0 1 1 24.58 13 11.58 11.58 0 0 1 13 24.58z"
        fill={ color }
      />

      <path
        className="Add-path"
        d="M17.2 13a.47.47 0 0 1-.5.5h-3.2v3.2a.5.5 0 0 1-1 0v-3.2H9.3a.5.5 0 0 1 0-1h3.2V9.3a.5.5 0 0 1 1 0v3.2h3.2a.47.47 0 0 1 .5.5z"
        fill={ color }
      />
    </svg>
  );
}


Add.propTypes = propTypes;
Add.defaultProps = defaultProps;
