import React, { PropTypes } from 'react';
import * as Icons from './Icons';
import './InformationalIcon.css';

const propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
};

const defaultProps = {
  color: '#646471',
  height: '50',
  width: '50'
};


export default function InformationalIcon({...props}) {
  const { children, color, height, name, width } = props;
  const IconComponent = Icons[name];

  const iconWrapperStyle = {
    display: 'inline-block',
    height: height,
    width: width
  };


  return(
    <div className="InformationalIcon">
      <span className="InformationalIcon-icon-wrapper" style={ iconWrapperStyle }>
        <IconComponent iconColor={ color } />
      </span>

      <span className="InformationalIcon-children-wrapper">
        { children }
      </span>
    </div>
  );
}


InformationalIcon.propTypes = propTypes;
InformationalIcon.defaultProps = defaultProps;
