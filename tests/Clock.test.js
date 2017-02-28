import React from 'react';
import ReactDOM from 'react-dom';
import { clock } from 'src/modules/InformationalIcon/Icons';


describe('<clock />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<clock />, div);
  });

});
