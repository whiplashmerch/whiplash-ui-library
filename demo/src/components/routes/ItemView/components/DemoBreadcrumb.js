import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'src';

const propTypes = {
  active: PropTypes.string
};


export default function DemoBreadcrumb({ active }) {
  const list = [
    { name: 'home', url: '/' },
    { name: active, url: `javascript:void(0)` }
  ];

  return(
    <Breadcrumb list={ list } />
  );
}

DemoBreadcrumb.propTypes = propTypes;
