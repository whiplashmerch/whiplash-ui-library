import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import NavLink from './';


describe('NavLink Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLink />, div);
  });

});
