import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Table.css';

const propTypes = {
  inverted: PropTypes.bool
};

const defaultProps = {
  inverted: false
};


export default function Table({ children, inverted, ...props }) {
  const tableClass = classnames('Table', { inverted });

  if (!!!children) {
    return null;
  }

  return(
    <table className={ tableClass } { ...props }>
      { children }
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
