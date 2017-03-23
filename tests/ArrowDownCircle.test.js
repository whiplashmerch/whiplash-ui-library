import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { arrow_down_circle } from 'src/modules/Icon/Icons';


describe('<arrow_down_circle />', () => {

  const defaultWrapper = mount(<arrow_down_circle />);
  const wrapper = mount(<arrow_down_circle iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<arrow_down_circle />, div);
  });

  // PROPS

  it('should have a default iconColor prop', () => {
    const prop = defaultWrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    // expect(prop).to.not.equal(undefined);
    // expect(prop).to.not.equal('');
    // expect(prop).to.equal('#646471');
  });

  it('should take a iconColor prop', () => {
    const prop = wrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('blue');
  });

});
