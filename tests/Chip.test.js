import React from 'react';
import ReactDOM from 'react-dom';
import { chip } from 'src/modules/InformationalIcon/Icons';


describe('<chip />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<chip />, div);
  });

});
