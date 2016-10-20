import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount } from 'enzyme';
import Breadcrumb from './';


describe('Breadcrumb Component', () => {

  const breadList = [{ name: 'test', url: 'test' }];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb list={ breadList } />, div);
  });

  it('should take in array for list prop', () => {
    const wrapper = mount(<Breadcrumb list={ breadList } />);
    expect(wrapper.props().list).toEqual(wrapper.props().list);
    expect(wrapper.props().list.length).toEqual(1);
  });

  it('should be hidden if list length is 0', () => {
    const wrapper = mount(<Breadcrumb list={[]} />);
    expect(wrapper.props().list).toEqual(wrapper.props().list);
    expect(wrapper.props().list.length).toEqual(0);
  });

  it('should create a list el with text', () => {
    const wrapper = mount(<Breadcrumb list={ breadList } />);
    expect(wrapper.find('li').text()).toEqual('test');
  });

});
