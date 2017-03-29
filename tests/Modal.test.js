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
    logo: "fake.svg",
    modalWidth: '40rem',
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

  it('should have a default logo prop', () => {
    const prop = defaultWrapper.props().logo;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('test.svg');
    expect(prop).to.equal('');
  });

  it('should have a default modalWidth prop', () => {
    const prop = defaultWrapper.props().modalWidth;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('38.75rem');
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

  it('should accept an logo prop', () => {
    const prop = wrapper.props().logo;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.logo);
  });

  it('should accept an modalWidth prop', () => {
    const prop = wrapper.props().modalWidth;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('38.75rem');
    expect(prop).to.equal(props.modalWidth);
  });

  // COMPONENT

  it('should run onCloseModal when called', () => {
    const func = wrapper.instance()._close;
    const spy  = sinon.spy(func);

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(spy.threw).to.not.equal(true);
    func();

    setTimeout(() => {
      expect(props.onCloseModal.called).to.equal(true);
    }, 500);
  });

  it('should add close animation classes in _close', () => {
    const func = wrapper.instance()._close;
    let contentEl, overlayEl = null;

    func();
    contentEl = wrapper.find('.Modal-content.fadeOutUp');
    overlayEl = wrapper.find('.Modal-overlay.fadeOut');

    expect(contentEl.length).to.not.equal(0);
    expect(contentEl.length).to.equal(1);
    expect(overlayEl.length).to.not.equal(0);
    expect(overlayEl.length).to.equal(1);
  });

  it('should add an active class if active prop true', () => {
    const el = wrapper.find('.active');
    expect(wrapper.props().active).to.equal(true);
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el.length).to.equal(1);
  });

  it('should display the content prop in the UI', () => {
    const text = wrapper.find('.Modal-content').text();
    expect(text).to.not.equal(null);
    expect(text).to.not.equal(undefined);
    expect(text).to.not.equal('');
    expect(text).to.equal(props.content);
  });

});
