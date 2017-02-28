import React from 'react';
import ReactDOM from 'react-dom';
import { approved } from 'src/modules/InformationalIcon/Icons';


describe('<approved />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<approved />, div);
  });

});
