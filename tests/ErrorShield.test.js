import React from 'react';
import ReactDOM from 'react-dom';
import { error_shield } from 'src/modules/Icon/Icons';


describe('<ErrorShield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorShield />, div);
  });

});
