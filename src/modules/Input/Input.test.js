import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Input from './';


describe('<Input />', () => {

  const testFn = () => console.log('');

  const defaultWrapper = mount(<Input />);

  const wrapper = mount(
    <Input
      basic
      inputLabel="test label"
      type="email"
      maxLength="220"
      placeholder="test"
      onUserInput={ testFn }
      required
    />
  );


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

  it('should have a default onUserInput prop', () => {
    expect(defaultWrapper.props().onUserInput).to.not.equal(null);
    expect(defaultWrapper.props().onUserInput).to.not.equal(undefined);
    expect(defaultWrapper.props().onUserInput).to.not.throw(Error);
  });

  it('should accept a onUserInput prop', () => {
    expect(wrapper.props().onUserInput).to.not.equal(null);
    expect(wrapper.props().onUserInput).to.not.equal(undefined);
    expect(wrapper.props().onUserInput).to.not.throw(Error);
    expect(wrapper.props().onUserInput).to.equal(testFn);
  });

  it('should allow all other props given', () => {
    expect(wrapper.props().placeholder).to.not.equal(null);
    expect(wrapper.props().placeholder).to.not.equal(undefined);
    expect(wrapper.props().placeholder).to.not.equal('');
    expect(wrapper.props().placeholder).to.equal('test');
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

});
