import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Input } from 'src';


describe('<Input />', () => {

  const onUserInput = sinon.spy();

  const props = {
    basic: true,
    inputLabel: 'test label',
    type: 'email',
    maxLength: 220,
    placeholder: 'test',
    onUserInput,
    search: true,
    required: true
  };
  const noAnimationProps = { ...props, noAnimation: true };

  const defaultWrapper = mount(<Input />);
  const wrapper = mount(<Input { ...props } />);
  const noAnimationWrapper = mount(<Input { ...noAnimationProps } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  it('should have a default inputLabel prop', () => {
    expect(defaultWrapper.props().inputLabel).to.not.equal(null);
    expect(defaultWrapper.props().inputLabel).to.not.equal(undefined);
    expect(defaultWrapper.props().inputLabel).to.not.equal('test label');
    expect(defaultWrapper.props().inputLabel).to.equal('');
  });

  it('should accept a inputLabel prop', () => {
    expect(wrapper.props().inputLabel).to.not.equal(null);
    expect(wrapper.props().inputLabel).to.not.equal(undefined);
    expect(wrapper.props().inputLabel).to.not.equal('');
    expect(wrapper.props().inputLabel).to.equal('test label');
  });

  it('should have a default basic prop', () => {
    expect(defaultWrapper.props().basic).to.not.equal(null);
    expect(defaultWrapper.props().basic).to.not.equal(undefined);
    expect(defaultWrapper.props().basic).to.not.equal('false');
    expect(defaultWrapper.props().basic).to.equal(false);
  });

  it('should accept a basic prop', () => {
    expect(wrapper.props().basic).to.not.equal(null);
    expect(wrapper.props().basic).to.not.equal(undefined);
    expect(wrapper.props().basic).to.not.equal(false);
    expect(wrapper.props().basic).to.not.equal('true');
    expect(wrapper.props().basic).to.equal(true);
  });

  it('should have a default noAnimation prop', () => {
    expect(defaultWrapper.props().noAnimation).to.not.equal(null);
    expect(defaultWrapper.props().noAnimation).to.not.equal(undefined);
    expect(defaultWrapper.props().noAnimation).to.not.equal('true');
    expect(defaultWrapper.props().noAnimation).to.equal(false);
  });

  it('should accept a noAnimation prop', () => {
    expect(noAnimationWrapper.props().noAnimation).to.not.equal(null);
    expect(noAnimationWrapper.props().noAnimation).to.not.equal(undefined);
    expect(noAnimationWrapper.props().noAnimation).to.not.equal(false);
    expect(noAnimationWrapper.props().noAnimation).to.not.equal('true');
    expect(noAnimationWrapper.props().noAnimation).to.equal(true);
  });

  it('should have a default onUserInput prop', () => {
    expect(defaultWrapper.props().onUserInput).to.not.equal(null);
    expect(defaultWrapper.props().onUserInput).to.not.equal(undefined);
    expect(defaultWrapper.props().onUserInput).to.not.throw(Error);
  });

  it('should accept a onUserInput prop', () => {
    expect(wrapper.props().onUserInput).to.not.equal(null);
    expect(wrapper.props().onUserInput).to.not.equal(undefined);
    expect(wrapper.props().onUserInput).to.not.throw(Error);
    expect(wrapper.props().onUserInput).to.equal(onUserInput);
  });

  it('should allow all other props given', () => {
    expect(wrapper.props().placeholder).to.not.equal(null);
    expect(wrapper.props().placeholder).to.not.equal(undefined);
    expect(wrapper.props().placeholder).to.not.equal('');
    expect(wrapper.props().placeholder).to.equal('test');
  });

  it('should have a default search prop', () => {
    expect(defaultWrapper.props().search).to.not.equal(null);
    expect(defaultWrapper.props().search).to.not.equal(undefined);
    expect(defaultWrapper.props().search).to.not.equal('false');
    expect(defaultWrapper.props().search).to.equal(false);
  });

  it('should accept a search prop', () => {
    expect(wrapper.props().search).to.not.equal(null);
    expect(wrapper.props().search).to.not.equal(undefined);
    expect(wrapper.props().search).to.not.equal(false);
    expect(wrapper.props().search).to.not.equal('true');
    expect(wrapper.props().search).to.equal(true);
  });

  it('should have a default passVisibility state', () => {
    expect(defaultWrapper.state().passVisibility).to.not.equal(null);
    expect(defaultWrapper.state().passVisibility).to.not.equal(undefined);
    expect(defaultWrapper.state().passVisibility).to.not.equal('false');
    expect(defaultWrapper.state().passVisibility).to.equal(false);
  });

  it('should display a <AnimatedInput /> if basic prop false', () => {
    expect(defaultWrapper.find('.AnimatedInput').length).to.not.equal(null);
    expect(defaultWrapper.find('.AnimatedInput').length).to.not.equal(undefined);
    expect(defaultWrapper.find('.AnimatedInput').length).to.not.equal(0);
    expect(defaultWrapper.find('.AnimatedInput').length).to.equal(1);

    expect(wrapper.find('.AnimatedInput').length).to.not.equal(1);
    expect(wrapper.find('.AnimatedInput').length).to.equal(0);
  });

  it('should display the inputLabel in the UI', () => {
    expect(wrapper.props().inputLabel).to.equal('test label');
    expect(wrapper.props().inputLabel).to.not.equal('');
    expect(wrapper.find('.Input-label').text()).to.not.equal('');
    expect(wrapper.props().inputLabel).to.equal('test label');
  });

  it('should add a special "search" class if search prop true', () => {
    expect(defaultWrapper.find('.search').length).to.not.equal(1);
    expect(defaultWrapper.find('.search').length).to.equal(0);
    expect(wrapper.find('.search').length).to.not.equal(0);
    expect(wrapper.find('.search').length).to.equal(1);
  });

  it('should display a password button if type="password"', () => {
    const passWrapper = mount(<Input basic type="password" />);
    expect(passWrapper.find('.Input-toggle-value-btn').length).to.not.equal(null);
    expect(passWrapper.find('.Input-toggle-value-btn').length).to.not.equal(undefined);
    expect(passWrapper.find('.Input-toggle-value-btn').length).to.not.equal(0);
    expect(passWrapper.find('.Input-toggle-value-btn').length).to.equal(1);
  });

  it('should toggle passVisibility state when btn clicked', () => {
    const passWrapper = mount(<Input basic type="password" />);
    expect(passWrapper.state().passVisibility).to.equal(false);
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.state().passVisibility).to.equal(true);
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.state().passVisibility).to.equal(false);
  });

  it('should add a special "show" class if passVisibility state true', () => {
    const passWrapper = mount(<Input basic type="password" />);
    expect(passWrapper.find('.show').length).to.not.equal(1)
    expect(passWrapper.find('.show').length).to.equal(0)
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.find('.show').length).to.not.equal(0)
    expect(passWrapper.find('.show').length).to.equal(1)
  });

  it('should have an active class if noAnimation is true', () => {
    const noAnimation = mount(<Input noAnimation />);
    expect(noAnimation.find('.AnimatedInput .active').length).to.equal(1);
  });

  it('should should call the onUserInput function when text is input', () => {
    wrapper.find('.Input-input').simulate('change', { target: { value: 'horcrux or die' } } );
    expect(onUserInput.called).to.equal(true);
    expect(onUserInput.args[1][0]).to.equal('horcrux or die');
  });

});
