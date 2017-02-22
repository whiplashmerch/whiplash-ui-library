import React from 'react';


export default function ValidateChildren(childrenProp = null, classname = '') {
  if (!!!childrenProp) {
    return null;
  }

  return(
    <span className={ `${ classname }-children-wrapper` }>
      { childrenProp }
    </span>
  );
}
