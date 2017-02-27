import React, { PropTypes } from 'react';
import './Download.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Download({ iconColor }) {
  return(
    <svg className="Download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26"><g className="Download-path" fill={ iconColor } fillRule="evenodd"><path d="M1.826 26C.913 26 0 24.97 0 24.007V8.543C0 7.643.76 7 1.826 7h3.957c.243 0 .456.243.456.5s-.214.5-.457.5H1.826C1.46 8 1 8.125 1 8.543v15.464c0 .45.43.993.826.993h21.652c.335 0 .522-.51.522-.993V8.543C24 8.19 23.996 8 23.478 8h-4.26c-.244 0-.457-.243-.457-.5s.214-.5.457-.5h4.26C24.423 7 25 7.58 25 8.543v15.464C25 24.97 24.422 26 23.478 26H1.826z"/><path d="M12 .48v14.04c0 .256.233.48.5.48s.5-.224.5-.48V.48c0-.257-.233-.48-.5-.48s-.5.223-.5.48z"/><path d="M15.79 10.502l-3.34 3.34c-.24.24-.285.616-.096.804.188.19.564.143.804-.097l3.34-3.34c.24-.242.287-.618.098-.806-.188-.19-.564-.143-.805.098z"/><path d="M9.158 10.502l3.34 3.34c.24.24.287.616.098.804-.188.19-.564.143-.805-.097l-3.34-3.34c-.24-.242-.285-.618-.096-.806.188-.19.564-.143.804.098zM16.565 20h-8.13C8.203 20 8 19.767 8 19.5s.203-.5.435-.5h8.13c.232 0 .435.233.435.5s-.203.5-.435.5z"/></g></svg>
  );
}


Download.propTypes = propTypes;
Download.defaultProps = defaultProps;
