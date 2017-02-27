import React from 'react';
import ReactDOM from 'react-dom';
import { approved_shield } from 'src/modules/InformationalIcon/Icons';


describe('<ApprovedShield />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ApprovedShield />, div);
  });

});
