import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DatePicker from './';


describe('<DatePicker />', () => {

  const testFn = e => e.preventDefault();

  const defaultWrapper = mount(<DatePicker />);

  const wrapper = mount(
    <DatePicker
      labelText="from"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
  });

  it('should have a default labelText prop', () => {
    expect(defaultWrapper.props().labelText).to.not.equal(null);
    expect(defaultWrapper.props().labelText).to.not.equal(undefined);
    expect(defaultWrapper.props().labelText).to.not.equal('');
    expect(defaultWrapper.props().labelText).to.equal('add labelText prop');
  });

  it('should accept a labelText prop', () => {
    expect(wrapper.props().labelText).to.not.equal(null);
    expect(wrapper.props().labelText).to.not.equal(undefined);
    expect(wrapper.props().labelText).to.not.equal('');
    expect(wrapper.props().labelText).to.not.equal('add labelText prop');
    expect(wrapper.props().labelText).to.equal('from');
  });

  it('should have a default active state', () => {
    expect(wrapper.state().active).to.not.equal(null);
    expect(wrapper.state().active).to.not.equal(undefined);
    expect(wrapper.state().active).to.not.equal('');
    expect(wrapper.state().active).to.not.equal('false');
    expect(wrapper.state().active).to.equal(false);
  });

  it('should display a <label> tag if labelText is given', () => {
    expect(defaultWrapper.find('.DatePicker-label').length).to.not.equal(1);
    expect(defaultWrapper.find('.DatePicker-label').length).to.equal(0);
    expect(wrapper.find('.DatePicker-label').length).to.not.equal(null);
    expect(wrapper.find('.DatePicker-label').length).to.not.equal(undefined);
    expect(wrapper.find('.DatePicker-label').length).to.not.equal(0);
    expect(wrapper.find('.DatePicker-label').length).to.equal(1);
  });

  it('should display the labelText value in the UI if given', () => {
    expect(wrapper.find('.DatePicker-label').text()).to.not.equal(null);
    expect(wrapper.find('.DatePicker-label').text()).to.not.equal(undefined);
    expect(wrapper.find('.DatePicker-label').text()).to.not.equal('');
    expect(wrapper.find('.DatePicker-label').text()).to.equal('from');
  });

  it('should display an input in the UI', () => {
    expect(wrapper.find('.DatePicker-input').length).to.not.equal(null);
    expect(wrapper.find('.DatePicker-input').length).to.not.equal(undefined);
    expect(wrapper.find('.DatePicker-input').length).to.not.equal(0);
    expect(wrapper.find('.DatePicker-input').length).to.equal(1);
  });

  it('should toggle the active state when input element clicked', () => {
    expect(wrapper.state().active).to.equal(false);
    wrapper.find('.DatePicker-input').simulate('click');
    expect(wrapper.state().active).to.equal(true);
    wrapper.find('.DatePicker-input').simulate('click');
    expect(wrapper.state().active).to.equal(false);
  });

});
