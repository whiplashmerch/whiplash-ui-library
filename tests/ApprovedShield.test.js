import React from 'react';
import ReactDOM from 'react-dom';
import { approved_shield } from 'src/modules/InformationalIcon/Icons';


describe('<approved_shield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<approved_shield />, div);
  });

});
