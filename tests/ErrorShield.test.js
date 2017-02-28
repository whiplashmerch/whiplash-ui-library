import React from 'react';
import ReactDOM from 'react-dom';
import { error_shield } from 'src/modules/Icon/Icons';


describe('<error_shield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<error_shield />, div);
  });

});
