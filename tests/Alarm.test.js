import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { alarm } from 'src/modules/Icon/Icons';


describe('<alarm />', () => {

  const defaultWrapper = mount(<alarm />);
  const wrapper = mount(<alarm iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<alarm />, div);
  });

  it('should take a iconColor prop', () => {
    const prop = wrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('blue');
  });

});
