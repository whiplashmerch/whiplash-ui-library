import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import Legend from './';


describe('Legend Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Legend activeIndex="3" total="5" />, div);
  });

  it('should have a list item', () => {
    const wrapper = mount(<Legend activeIndex="1" total="5" />);
    expect(wrapper.find('li').length).toEqual(5);
  });

});
