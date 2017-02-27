import React from 'react';
import ReactDOM from 'react-dom';
import { chip } from 'src/modules/InformationalIcon/Icons';


describe('<Chip />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chip />, div);
  });

});
