import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import Button from './';


describe('Button Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonText="test" callback={ function(){} } />, div);
  });


  it('should have a button trigger', () => {
    const wrapper = mount(<Button buttonText="test" callback={ function(){} } />);
    expect(wrapper.find('.Button').length).toEqual(0);
  });


  it('should have a default buttonType prop', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.props().buttonType).toEqual('button');
  });


  it('should add buttonType prop to type attribute', () => {
    const wrapper = mount(<Button buttonType="submit" />);
    expect(wrapper.props().buttonType).toEqual(wrapper.props().buttonType);
  });


  it('should have a default callback prop', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.props().callback).toEqual(wrapper.props().callback);
  });

});
