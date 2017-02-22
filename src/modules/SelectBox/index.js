import React, { PropTypes } from 'react';
import { ValidComponentChildren } from '../../utils';

const propTypes = {
  children: PropTypes.array,
  callback: PropTypes.func
};

const getChildren = (childComponents) => {
  return ValidComponentChildren.map(childComponents, child => {
    return child;
  })
};


export default function SelectBox({ children, callback }) {
  const childContent = getChildren(children);

  if (!!!children) {
    return null;
  }

  return(
    <div className="SelectBox">
      { childContent }
    </div>
  );
}

SelectBox.propTypes = propTypes;
