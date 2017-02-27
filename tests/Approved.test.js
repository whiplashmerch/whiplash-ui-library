import React from 'react';
import ReactDOM from 'react-dom';
import { approved } from 'src/modules/InformationalIcon/Icons';


describe('<Approved />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Approved />, div);
  });

});
