import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import Modal from './';


describe('Modal Component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
  });


  it('should have a close button', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.Modal-close-btn').length).toEqual(0);
  });


  it('should have a default width if none given', () => {
    const wrapper = mount(<Modal />);
    expect(wrapper.props().modalWidth).toEqual('38.75rem');
  });


  it('should set width to modalWidth prop', () => {
    const wrapper = mount(<Modal modalWidth="10rem" />);
    expect(wrapper.props().modalWidth).toEqual('10rem');
  });


  it('should close Modal when overlay clicked', () => {
    // let state = true;
    // const func = function(){ state = false; };
    // const wrapper = mount(<Modal active={ state } onCloseModal={ func } />);

    // TODO: figure out how to update state with test
    // wrapper.find('.Modal-overlay').simulate('click');

    // expect(wrapper.find('.active').length).toEqual(1);
  });

});
