import React, { PropTypes } from 'react';
import * as Icons from './Icons';
import './Icon.css';

const propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
};

const defaultProps = {
  color: '#646471',
  height: '24',
  width: '24'
};


export default function Icon({...props}) {
  const { children, color, height, name, width } = props;
  const IconComponent = Icons[name];

  const iconWrapperStyle = {
    display: 'inline-block',
    height: height,
    width: width
  };


  return(
    <div className="Icon">
      <span className="Icon-icon-wrapper" style={ iconWrapperStyle }>
        <IconComponent iconColor={ color } />
      </span>

      <span className="Icon-children-wrapper">
        { children }
      </span>
    </div>
  );
}


Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
