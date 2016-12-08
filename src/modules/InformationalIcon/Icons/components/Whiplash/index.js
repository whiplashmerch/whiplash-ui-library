import React, { PropTypes } from 'react';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Whiplash({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 36"><title>whiplash logo</title><g fill="none" fillRule="evenodd" stroke="#5134C4"><path strokeWidth="1.2" d="M1.844 18l28.902 16.883M11.254 1.793v33.09" strokeLinecap="square"/><path strokeWidth="1.2" d="M30.746 1.117v33.09" strokeLinecap="round"/><path strokeWidth="1.2" d="M11.674 1.313L40.156 18m-9.41-16.883L1.844 18m9.41 16.883L40.156 18m-28.482-5.045l8.99 7.07M21 29.053v-8.537m9.746-7.918l-9.41 7.43" strokeLinecap="square"/><path d="M30.896.86l9.86 17.12-9.897 17.14-19.756.02-9.86-17.12L11.142.88z"/></g></svg>
  );
}


Whiplash.propTypes = propTypes;
Whiplash.defaultProps = defaultProps;
