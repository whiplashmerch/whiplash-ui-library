import React from 'react';
import ReactDOM from 'react-dom';
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
    expect(wrapper.props().list).not.toBeNull();
    expect(wrapper.props().list).toBeDefined();
    expect(wrapper.props().list.length).toEqual(1);
  });

  it('should be hidden if list length is 0', () => {
    const wrapper = mount(<Breadcrumb list={[]} />);
    expect(wrapper.props().list).not.toBeNull();
    expect(wrapper.props().list).toBeDefined();
    expect(wrapper.find('hidden')).toBeDefined();
  });

  it('should create a list el with text', () => {
    const wrapper = mount(<Breadcrumb list={ breadList } />);
    expect(wrapper.find('li')).not.toBeNull();
    expect(wrapper.find('li')).toBeDefined();
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').text()).not.toEqual('');
  });

});
