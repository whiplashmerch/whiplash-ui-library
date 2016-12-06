import React, { PropTypes } from 'react';
import * as Icons from './Icons';
import './Icon.css';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: ''
};


export default function Icon({ children, name, ...props }) {
  const IconComponent = Icons[name];

  return(
    <div className="Icon">
      <IconComponent />
      { children }
    </div>
  );
}
