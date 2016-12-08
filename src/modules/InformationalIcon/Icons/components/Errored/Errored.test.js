import React from 'react';
import ReactDOM from 'react-dom';
import Errored from './';


describe('<Errored />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Errored />, div);
  });

});
