import React from 'react';
import ReactDOM from 'react-dom';
import ApprovedShield from './';


describe('<ApprovedShield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ApprovedShield />, div);
  });

});
