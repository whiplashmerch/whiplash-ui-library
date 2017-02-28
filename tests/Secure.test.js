import React from 'react';
import ReactDOM from 'react-dom';
import { secure } from 'src/modules/Icon/Icons';


describe('<secure />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<secure />, div);
  });

});
