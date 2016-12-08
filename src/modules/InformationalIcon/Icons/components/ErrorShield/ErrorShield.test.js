import React from 'react';
import ReactDOM from 'react-dom';
import ErrorShield from './';


describe('<ErrorShield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorShield />, div);
  });

});
