import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import SuccessAnimation from 'src/modules/EditableDiv/components/SuccessAnimation';


describe('<SuccessAnimation />', () => {

  const props = {
    animationSize: 14,
    handleHide: sinon.spy()
  };

  const defaultWrapper = mount(<SuccessAnimation />);
  const wrapper = mount(<SuccessAnimation { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SuccessAnimation />, div);
  });

  // PROPS

  it('should have a default animationSize prop', () => {
    const prop = defaultWrapper.props().animationSize;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('24');
    expect(prop).to.equal(24);
  });

  it('should accept a animationSize prop', () => {
    const prop = wrapper.props().animationSize;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(24);
    expect(prop).to.not.equal('14');
    expect(prop).to.equal(14);
  });

  it('should have a default handleHide prop', () => {
    const prop = defaultWrapper.props().handleHide;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(() => prop()).to.not.equal(undefined);
  });

  it('should accept a handleHide prop', () => {
    const prop = wrapper.props().handleHide;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.handleHide);
  });

  // COMPONENT

  it('should have an healthy _animateOut method', () => {
    const prop = wrapper.instance()._animateOut;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);

    // make sure it adds outro class to Component
    expect(wrapper.find('.zoomIn').length).to.not.equal(0);
    expect(wrapper.find('.zoomIn').length).to.equal(1);
    expect(wrapper.find('.zoomOut').length).to.not.equal(1);
    expect(wrapper.find('.zoomOut').length).to.equal(0);
  });

  it('should call the handleHide prop after 1.1s', () => {
    const newWrapper = mount(<SuccessAnimation />);
    const spy = sinon.spy(() => newWrapper.instance()._animateOut());
    const result = sinon.spy(newWrapper.props().handleHide);

    spy.returned(result);

    setTimeout(() => {
      expect(result.called()).to.equal(true);
      expect(result.calledOnce()).to.equal(true);
    }, 1100);
  });

  it('should render a success icon', () => {
    const selector = '.InformationalIcon';
    const approvedSelector = 'svg title';
    expect(wrapper.find(selector).length).to.not.equal(0);
    expect(wrapper.find(selector).length).to.equal(1);
    expect(wrapper.find(approvedSelector).text()).to.not.equal('');
    expect(wrapper.find(approvedSelector).text()).to.equal('approved');
  });

});
