import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Navicon from './';

describe('Navicon Component', () => {

  const defaultWrapper = mount(<Navicon />);

  const wrapper = mount(
    <Navicon
      barColor="blue"
      onUserInput={() => console.log('onUserInput')}
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navicon />, div);
  });


});
