import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import NotificationToast from './';


describe('<NotificationToast />', () => {

  const defaultWrapper = mount(<NotificationToast />);

  const wrapper = mount(
    <NotificationToast
      active
      message="test notification message"
      theme="pending"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationToast />, div);
  });

  it('should take a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('false');
    expect(defaultWrapper.props().active).to.equal(false);
  });

  it('should accept a active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(false);
    expect(wrapper.props().active).to.not.equal('true');
    expect(wrapper.props().active).to.equal(true);
  });

  it('should take a default message prop', () => {
    expect(defaultWrapper.props().message).to.not.equal(null);
    expect(defaultWrapper.props().message).to.not.equal(undefined);
    expect(defaultWrapper.props().message).to.not.equal('');
    expect(defaultWrapper.props().message).to.equal('add your notification message prop');
  });

  it('should accept a message prop', () => {
    expect(wrapper.props().message).to.not.equal(null);
    expect(wrapper.props().message).to.not.equal(undefined);
    expect(wrapper.props().message).to.not.equal('add your notification message prop');
    expect(wrapper.props().message).to.equal('test notification message');
  });

  it('should take a default theme prop', () => {
    expect(defaultWrapper.props().theme).to.not.equal(null);
    expect(defaultWrapper.props().theme).to.not.equal(undefined);
    expect(defaultWrapper.props().theme).to.equal('');
  });

  it('should accept a theme prop', () => {
    expect(wrapper.props().theme).to.not.equal(null);
    expect(wrapper.props().theme).to.not.equal(undefined);
    expect(wrapper.props().theme).to.not.equal('');
    expect(wrapper.props().theme).to.equal('pending');
  });

  it('should return null if active prop false', () => {
    expect(defaultWrapper.find('.NotificationToast').length).to.not.equal(null);
    expect(defaultWrapper.find('.NotificationToast').length).to.not.equal(undefined);
    expect(defaultWrapper.find('.NotificationToast').length).to.not.equal(1);
    expect(defaultWrapper.find('.NotificationToast').length).to.equal(0);
  });

  it('should display the message in the UI', () => {
    expect(wrapper.find('.NotificationToast-text').text()).not.to.equal(null);
    expect(wrapper.find('.NotificationToast-text').text()).not.to.equal(undefined);
    expect(wrapper.find('.NotificationToast-text').text()).not.to.equal('');
    expect(wrapper.find('.NotificationToast-text').text()).to.equal('test notification message.');
  });

  it('should add the theme as a class to the parent element', () => {
    expect(wrapper.find('.NotificationToast.pending')).not.to.equal(null);
    expect(wrapper.find('.NotificationToast.pending')).not.to.equal(undefined);
  });

});
