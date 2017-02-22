import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import AnimatedInput from './';


describe('<AnimatedInput />', () => {

  const testFn = () => console.log('');

  const defaultWrapper = mount(<AnimatedInput />);

  const wrapper = mount(
    <AnimatedInput
      inputLabel="test label"
      type="email"
      placeholder="test"
      maxLength="220"
      onUserInput={ testFn }
      required
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnimatedInput />, div);
  });

  it('should have a default inputLabel prop', () => {
    expect(defaultWrapper.props().inputLabel).to.not.equal(null);
    expect(defaultWrapper.props().inputLabel).to.not.equal(undefined);
    expect(defaultWrapper.props().inputLabel).to.equal('');
    expect(defaultWrapper.props().inputLabel).to.not.equal('test label');
  });

  it('should accept a inputLabel prop', () => {
    expect(wrapper.props().inputLabel).to.not.equal(null);
    expect(wrapper.props().inputLabel).to.not.equal(undefined);
    expect(wrapper.props().inputLabel).to.not.equal('');
    expect(wrapper.props().inputLabel).to.equal('test label');
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

  it('should have a default active state', () => {
    expect(wrapper.state().active).to.not.equal(null);
    expect(wrapper.state().active).to.not.equal(undefined);
    expect(wrapper.state().active).to.not.equal('false');
    expect(wrapper.state().active).to.equal(false);
  });

  it('should display the inputLabel in the UI', () => {
    expect(wrapper.props().inputLabel).to.equal('test label');
    expect(wrapper.props().inputLabel).to.not.equal('');
    expect(wrapper.find('.AnimatedInput-label').text()).to.not.equal('');
    expect(wrapper.props().inputLabel).to.equal('test label');
  });

});
