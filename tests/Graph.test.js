import React from 'react';
import ReactDOM from 'react-dom';
import { graph } from 'src/modules/InformationalIcon/Icons';


describe('<graph />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<graph />, div);
  });

});
