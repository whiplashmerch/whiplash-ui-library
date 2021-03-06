import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { add } from 'src/modules/Icon/Icons';


describe('<add />', () => {

  const defaultWrapper = mount(<add />);
  const wrapper = mount(<add iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<add />, div);
  });

  it('should take a iconColor prop', () => {
    const prop = wrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('blue');
  });

});
