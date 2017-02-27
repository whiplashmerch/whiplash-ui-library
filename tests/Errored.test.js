import React from 'react';
import ReactDOM from 'react-dom';
import { errored } from 'src/modules/InformationalIcon/Icons';


describe('<Errored />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Errored />, div);
  });

});
