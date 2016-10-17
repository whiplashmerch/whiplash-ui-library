import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import Input from './';


describe('Input Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });


  it('should have a default inputType', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.props().inputType).toEqual('text');
  });


  it('should update the type attribute to match inputType prop', () => {
    const wrapper = mount(<Input inputType="email" />);
    expect(wrapper.props().inputType).not.toEqual('text');
    expect(wrapper.props().inputType).toEqual('email');
  });


  it('should have a default maxLength prop', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.props().inputMax).toEqual('220');
  });


  it('should update the maxLength attribute to match inputMax prop', () => {
    const wrapper = mount(<Input inputMax="10" />);
    expect(wrapper.props().inputMax).toEqual('10');
  });

});
