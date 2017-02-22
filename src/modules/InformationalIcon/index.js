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

const getChildContent = (childrenProp) => {
  if (!!!childrenProp) {
    return null;
  }

  return(
    <span className="InformationalIcon-children-wrapper">
      { childrenProp }
    </span>
  );
};


export default function InformationalIcon({...props}) {
  const { children, color, height, name, width } = props;
  const IconComponent = Icons[name];
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
    <div className="InformationalIcon">
      <span className="InformationalIcon-icon-wrapper" style={ iconWrapperStyle }>
        <IconComponent iconColor={ color } />
      </span>

      { childContent }
    </div>
  );
}


InformationalIcon.propTypes = propTypes;
InformationalIcon.defaultProps = defaultProps;
