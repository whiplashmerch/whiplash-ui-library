import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import  { Modal } from 'src';


describe('<Modal />', () => {

  const props = {
    active: true,
    content: 'test content',
    onCloseModal: sinon.spy()
  };

  const defaultWrapper = mount(<Modal />);
  const wrapper = mount(<Modal { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal { ...props } />, div);
  });

  // PROPS

  it('should have a default active prop', () => {
    const prop = defaultWrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.not.equal(true);
    expect(prop).to.equal(false);
  });

  it('should have a default content prop', () => {
    const prop = defaultWrapper.props().content;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(null);
  });

  it('should accept an active prop', () => {
    const prop = wrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.equal(props.active);
  });

  it('should accept an content prop', () => {
    const prop = wrapper.props().content;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.content);
  });

  // COMPONENT

  it('should run onCloseModal when called', () => {
    const func = wrapper.instance()._close;
    const spy  = sinon.spy(func);

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(spy.threw).to.not.equal(true);
    // run
    func();
    expect(props.onCloseModal.called).to.equal(true);
  });

  it('should return null if active prop false', () => {
    const el = defaultWrapper.find('.Modal').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(1);
    expect(el).to.equal(0);
  });

  it('should return <Modal /> if active prop true', () => {
    const el = wrapper.find('.Modal').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should display the content prop in the UI', () => {
    const text = wrapper.find('.Modal-content').text();
    expect(text).to.not.equal(null);
    expect(text).to.not.equal(undefined);
    expect(text).to.not.equal('');
    expect(text).to.equal(props.content);
  });

  it('should call onCloseModal prop when button clicked', () => {
    const btn = wrapper.find('.Modal-close-btn');
    btn.simulate('click');
    expect(props.onCloseModal.called).to.equal(true);
    // make sure it removes <Modal /> component
    setTimeout(() => {
      expect(wrapper.find('.Modal').length).to.equal(0);
    }, 500);
  });

});
