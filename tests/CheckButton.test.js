import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { CheckButton } from 'src';


describe('<CheckButton />', () => {

  const defaultWrapper = mount(<CheckButton />);

  const wrapper = mount(
    <CheckButton
      defaultChecked
      name="test"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckButton />, div);
  });

  it('should have a default defaultChecked prop', () => {
    expect(defaultWrapper.props().defaultChecked).to.not.equal(null);
    expect(defaultWrapper.props().defaultChecked).to.not.equal(undefined);
    expect(defaultWrapper.props().defaultChecked).to.not.equal(true);
    expect(defaultWrapper.props().defaultChecked).to.equal(false);
  });

  it('should accept an defaultChecked prop', () => {
    expect(wrapper.props().defaultChecked).to.not.equal(null);
    expect(wrapper.props().defaultChecked).to.not.equal(undefined);
    expect(wrapper.props().defaultChecked).to.not.equal(false);
    expect(wrapper.props().defaultChecked).to.equal(true);
  });

  it('should accept all other props given', () => {
    expect(wrapper.props().name).to.not.equal(null);
    expect(wrapper.props().name).to.not.equal(undefined);
    expect(wrapper.props().name).to.not.equal('');
    expect(wrapper.props().name).to.equal('test');
  });

});
