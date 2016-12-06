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
  height: '26',
  width: '26'
};


export default function Icon({...props}) {
  const { children, name } = props;
  const IconComponent = Icons[name];

  return(
    <div className="Icon">
      <IconComponent { ...props } />
      <span className="Icon-children-wrapper">
        { children }
      </span>
    </div>
  );
}


Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
