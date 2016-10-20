import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import Navicon from './';

describe('Navicon Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navicon />, div);
  });


  it('should have a link trigger', () => {
    const wrapper = shallow(<Navicon />);
    expect(wrapper.find('.Navicon-link').every('.Navicon-link')).toEqual(true);
  });


  it('should have 3 "bar" elements', () => {
    const wrapper = shallow(<Navicon />);
    expect(wrapper.find('.Navicon-bar').length).toEqual(0);
  });


  it('should toggle state when clicked', () => {
    const func = (bool) => { return; };
    const wrapper = mount(<Navicon active={ false } onUserInput={ func }/>);

    // active toggle
    wrapper.find('a').simulate('click');
    expect(wrapper.props().active).toEqual(false);
    expect(wrapper.state().finish).toEqual(false);

    // deactive toggle
    wrapper.find('a').simulate('click');
    expect(wrapper.props().active).toEqual(false);
    expect(wrapper.state().finish).toEqual(false);
  });

});
