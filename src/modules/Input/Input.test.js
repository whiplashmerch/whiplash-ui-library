import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Input from './';


describe('<Input />', () => {

  const defaultWrapper = mount(<Input />);

  const wrapper = mount(
    <Input
      inputLabel="test label"
      type="email"
      placeholder="test"
      maxLength="220"
      onUserInput={(e) => console.log(e)}
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
    expect(defaultWrapper.props().inputLabel).to.equal('');
    expect(defaultWrapper.props().inputLabel).to.not.equal('test label');
  });

  it('should have a default onUserInput prop', () => {
    expect(defaultWrapper.props().onUserInput).to.not.equal(null);
    expect(defaultWrapper.props().onUserInput).to.not.equal(undefined);
    expect(defaultWrapper.props().onUserInput).to.not.throw(Error);
  });

  it('should display the inputLabel in the UI', () => {
    expect(wrapper.props().inputLabel).to.equal('test label');
    expect(wrapper.props().inputLabel).to.not.equal('');
    expect(wrapper.find('.Input-label').text()).to.not.equal('');
    expect(wrapper.props().inputLabel).to.equal('test label');
  });

});
