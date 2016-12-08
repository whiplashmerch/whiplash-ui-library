import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './';


describe('<Clock />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Clock />, div);
  });

});
