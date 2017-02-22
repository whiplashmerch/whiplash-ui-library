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

const getChildContent = (childrenProp) => {
  if (!!!childrenProp) {
    return null;
  }

  return(
    <span className="Icon-children-wrapper">
      { childrenProp }
    </span>
  );
};


export default function Icon({...props}) {
  const { children, color, height, name, width } = props;
  const IconComponent  = Icons[name];
  const childContent = getChildContent(children);
  let iconWrapperStyle = null;

  if (!!!height && !!!width) {
    iconWrapperStyle = { display: 'inline-block' };
  } else {
    iconWrapperStyle = {
      display: 'inline-block',
      height: Number(height),
      width: Number(width)
    };
  }

  return(
    <div className="Icon">
      <span className="Icon-icon-wrapper" style={ iconWrapperStyle }>
        <IconComponent iconColor={ color } />
      </span>

      { childContent }
    </div>
  );
}


Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
