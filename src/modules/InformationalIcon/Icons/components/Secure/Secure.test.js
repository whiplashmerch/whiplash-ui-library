import React from 'react';
import ReactDOM from 'react-dom';
import Secure from './';


describe('<Secure />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Secure />, div);
  });

});
