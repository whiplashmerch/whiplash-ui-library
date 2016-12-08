import React from 'react';
import ReactDOM from 'react-dom';
import Chip from './';


describe('<Chip />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chip />, div);
  });

});
