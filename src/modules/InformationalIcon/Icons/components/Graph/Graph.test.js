import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './';


describe('<Graph />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Graph />, div);
  });

});
