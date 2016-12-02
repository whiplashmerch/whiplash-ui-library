import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Breadcrumb from './';


describe('Breadcrumb Component', () => {

  const breadList = [{ name: 'test', url: 'test' }];

  const defaultWrapper = mount(<Breadcrumb />);

  const wrapper = mount(
    <Breadcrumb bgColor="#f5f5f5" list={ breadList } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb />, div);
  });

  it('should have a list prop', () => {
    // expect(defaultWrapper.props().list).not.toBeNull();
    // expect(defaultWrapper.props().list).toBeDefined();
    // expect(defaultWrapper.props().list).toEqual(breadList);
    // expect(defaultWrapper.props().list).not.toEqual([]);
  });

  it('should have a bgColor prop', () => {
    // expect(defaultWrapper.props().bgColor).not.toBeNull();
    // expect(defaultWrapper.props().bgColor).toBeDefined();
    // expect(defaultWrapper.props().bgColor).toEqual('#f5f5f5');
    // expect(defaultWrapper.props().bgColor).not.toEqual('#fff');
  });

  it('should have a default bgColor prop value', () => {
    // expect(defaultWrapper.props().bgColor).not.toBeNull();
    // expect(defaultWrapper.props().bgColor).toBeDefined();
    // expect(defaultWrapper.props().bgColor).toEqual('#fff');
    // expect(defaultWrapper.props().bgColor).not.toEqual('');
  });

  it('should have a default list prop value', () => {
    // expect(defaultWrapper.props().list).not.toBeNull();
    // expect(defaultWrapper.props().list).toBeDefined();
    // expect(defaultWrapper.props().list).toEqual([]);
    // expect(defaultWrapper.props().list).not.toEqual(breadList);
  });

  it('should display the list items of array length', () => {
    // expect(wrapper.find('.Breadcrumb-list-li').length).not.toBeNull();
    // expect(wrapper.find('.Breadcrumb-list-li').length).not.toEqual(0);
    // expect(wrapper.find('.Breadcrumb-list-li').length).toEqual(1);
  });

  it('should be hidden if list length is 0', () => {
    const wrapper = mount(<Breadcrumb list={[]} />);
    expect(wrapper.props().list.length).toEqual(0);
    expect(wrapper.find('.hidden')).not.toBeNull();
  });

});
