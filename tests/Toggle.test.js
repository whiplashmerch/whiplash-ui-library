import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Toggle } from 'src';


describe('<Toggle />', () => {

  const newRef = () => console.log('');

  const defaultWrapper = mount(<Toggle />);

  const wrapper = mount(
    <Toggle
      active={ true }
      ref={ newRef }
      name="test name"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggle />, div);
  });

  it('should have a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('false');
    expect(defaultWrapper.props().active).to.equal(false);
  });

  it('should accept a active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(false);
    expect(wrapper.props().active).to.equal(true);
  });

  it('should accept all given props', () => {
    expect(wrapper.props().name).to.not.equal(null);
    expect(wrapper.props().name).to.not.equal(undefined);
    expect(wrapper.props().name).to.equal('test name');
  });

  it('should have a default active state prop', () => {
    expect(defaultWrapper.state().active).to.not.equal(null);
    expect(defaultWrapper.state().active).to.not.equal(undefined);
    expect(defaultWrapper.state().active).to.not.equal('false');
    expect(defaultWrapper.state().active).to.equal(false);
  });

  it('should add an "active" class if state active', () => {
    expect(defaultWrapper.find('.Toggle').hasClass('active')).to.not.equal(true);
    expect(defaultWrapper.find('.Toggle').hasClass('active')).to.equal(false);
    expect(wrapper.find('.Toggle').hasClass('active')).to.not.equal(false);
    expect(wrapper.find('.Toggle').hasClass('active')).to.equal(true);
  });

  it('should update the state to match defaultChecked on the input', () => {
    expect(defaultWrapper.props().active).to.equal(false);
    expect(defaultWrapper.state().active).to.equal(false);
    expect(defaultWrapper.find('.Toggle-input').props().defaultChecked).to.equal(false);

    defaultWrapper.setProps({ active: true });

    expect(defaultWrapper.props().active).to.equal(true);
    expect(defaultWrapper.state().active).to.equal(true);
    expect(defaultWrapper.find('.Toggle-input').props().defaultChecked).to.equal(true);
  });

});
