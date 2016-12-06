import React, { PropTypes } from 'react';
import './Icon.css';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: ''
};


export default function Icon({ children, name, ...props }) {
  return(
    <div className="Icon">
      <span className={ `Icon-icon ${ name }` } />
      { children }
    </div>
  );
}
