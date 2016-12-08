import React from 'react';
import ReactDOM from 'react-dom';
import Whiplash from './';


describe('<Whiplash />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Whiplash />, div);
  });

});
