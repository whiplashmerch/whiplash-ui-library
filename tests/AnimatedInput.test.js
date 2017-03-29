import React from 'react';
import ReactDOM from 'react-dom';

import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AnimatedInput from 'src/modules/Input/components/AnimatedInput';


describe('<AnimatedInput />', () => {

  const props = {
    inputLabel: "test label",
    type: "email",
    placeholder: "test",
    maxLength: "220",
    onUserInput: sinon.spy(),
    required: true,
    value: 'test'
  };

  const defaultWrapper = mount(<AnimatedInput />);
  const wrapper = mount(<AnimatedInput { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnimatedInput />, div);
  });

  // PROPS

  it('should have a default inputLabel prop', () => {
    const prop = defaultWrapper.props().inputLabel;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal('');
    expect(prop).to.not.equal('test label');
  });

  it('should accept a inputLabel prop', () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test label');
  });

  it('should have a default onUserInput prop', () => {
    const prop = defaultWrapper.props().onUserInput;
    const result = console.warn('no onUserInput prop given');
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.throw(Error);
  });

  it('should accept a onUserInput prop', () => {
    const prop = wrapper.props().onUserInput;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.throw(Error);
    expect(prop).to.equal(props.onUserInput);
  });

  it('should allow all other props given', () => {
    const prop = wrapper.props().placeholder;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test');
  });

  // STATE

  it('should have a default active state', () => {
    const state = wrapper.state().active;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  it('should have a default passVisibility state', () => {
    const state = defaultWrapper.state().passVisibility;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  // COMPONENT

  it('should display the inputLabel in the UI', () => {
    const prop = wrapper.props().inputLabel;
    const el = wrapper.find('.AnimatedInput-label').text();

    expect(prop).to.equal('test label');
    expect(prop).to.not.equal('');
    expect(el).to.not.equal('');
    expect(el).to.equal('test label');
  });

  it('should display a password button if type="password"', () => {
    const passWrapper = mount(<AnimatedInput type="password" />);
    const el = passWrapper.find('.AnimatedInput-toggle-value-btn').length;

    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should call _getPasswordBtn if type="password"', () => {
    const func = sinon.spy(wrapper.instance()._getPasswordBtn());
    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(func.threw()).to.equal(false);
  });

  it('should call onUserInput prop when run', () => {
    const e = { target: { value: 'test' } };
    const func = wrapper.instance()._sendUpdate;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(props.onUserInput.called).to.equal(true);
  });

  it('should have a healthy _toggleInputType func', () => {
    const func = wrapper.instance()._toggleInputType;
    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
  });

  it('should have a healthy _toggleVisibility func', () => {
    const func = wrapper.instance()._toggleVisibility;
    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    // run
    expect(wrapper.state().passVisibility).to.equal(false);
    func();
    expect(wrapper.state().passVisibility).to.equal(true);
  });

  it('should have a healthy _updateClass func', () => {
    const func = wrapper.instance()._updateClass;
    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    // run
    wrapper.setState({ active: false });
    func();
    expect(wrapper.state().active).to.equal(true);
  });

  it('should toggle passVisibility state when btn clicked', () => {
    const passWrapper = mount(<AnimatedInput type="password" />);
    const btn = passWrapper.find('.AnimatedInput-toggle-value-btn');

    expect(passWrapper.state().passVisibility).to.equal(false);
    btn.simulate('click');
    expect(passWrapper.state().passVisibility).to.equal(true);
    btn.simulate('click');
    expect(passWrapper.state().passVisibility).to.equal(false);
  });

  it('should add a special "show" class if passVisibility state true', () => {
    const passWrapper = mount(<AnimatedInput type="password" />);
    const el = passWrapper.find('.show').length;

    expect(el).to.not.equal(1)
    expect(el).to.equal(0)
    passWrapper.find('.AnimatedInput-toggle-value-btn').simulate('click');
    expect(passWrapper.find('.show').length).to.not.equal(0)
    expect(passWrapper.find('.show').length).to.equal(1)
  });

  it('should add a "value" class if value prop given', () => {
    const el = wrapper.find('.value').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should add a "active" class when onFocus', () => {
    const trigger = wrapper.find('.AnimatedInput-input');
    let el = null;

    trigger.simulate('focus');
    el = wrapper.find('.active').length;

    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

});
