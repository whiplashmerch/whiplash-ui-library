import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { NavLink } from 'src';


describe('<NavLink />', () => {

  const wrapper = mount(
    <NavLink
      className="test-class"
      to="/test"
    >
      test link
    </NavLink>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLink />, div);
  });

  it('should have a to prop', () => {
    expect(wrapper.props().to).to.not.equal(null);
    expect(wrapper.props().to).to.not.equal(undefined);
    expect(wrapper.props().to).to.not.equal('');
    expect(wrapper.props().to).to.equal('/test');
  });

  it('should add extra given props', () => {
    expect(wrapper.find('.test-class')).to.not.equal(null);
    expect(wrapper.find('.test-class')).to.not.equal(undefined);
    expect(wrapper.find('.test-class').length).to.not.equal(0);
    expect(wrapper.find('.test-class').length).to.equal(1);
  });

  it('should add the children into the UI', () => {
    expect(wrapper.find('.test-class').text()).to.not.equal(null);
    expect(wrapper.find('.test-class').text()).to.not.equal(undefined);
    expect(wrapper.find('.test-class').text()).to.not.equal('');
    expect(wrapper.find('.test-class').text()).to.equal('test link');
  });

});
