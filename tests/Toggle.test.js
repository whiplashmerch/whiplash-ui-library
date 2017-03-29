import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Toggle } from 'src';


describe('<Toggle />', () => {

  const props = {
    active: true,
    callback: sinon.spy(),
    ref: sinon.spy(),
    name: 'test name'
  };

  const defaultWrapper = mount(<Toggle />);
  const wrapper = mount(<Toggle { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggle { ...props } />, div);
  });

  // PROPS

  it('should have a default active prop', () => {
    const prop = defaultWrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.equal(false);
  });

  it('should accept a active prop', () => {
    const prop = wrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.equal(props.active);
  });

  it('should accept all given props', () => {
    const prop = wrapper.props().name;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.name);
  });

  // STATE

  it('should have a default active state prop', () => {
    const state = defaultWrapper.state().active;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  // COMPONENT

  it('should update the state when called', () => {
    const func = wrapper.instance()._updateState;
    const spy  = sinon.spy(func);

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(spy.threw).to.not.equal(true);
    func();
    expect(wrapper.state().active).to.equal(true);
    expect(props.callback.calledOnce).to.equal(true);
  });

  it('should add an "active" class if state active', () => {
    const defaultEl = defaultWrapper.find('.Toggle').hasClass('active');
    const el = wrapper.find('.Toggle').hasClass('active');

    expect(defaultEl).to.not.equal(true);
    expect(defaultEl).to.equal(false);
    expect(el).to.not.equal(false);
    expect(el).to.equal(true);
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
